package com.example.hellovault;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.vault.core.VaultKeyValueOperationsSupport;
import org.springframework.vault.core.VaultSysOperations;
import org.springframework.vault.core.VaultTemplate;
import org.springframework.vault.core.VaultTransitOperations;
import org.springframework.vault.support.VaultMount;
import org.springframework.vault.support.VaultResponse;

@SpringBootApplication
public class HellovaultApplication implements CommandLineRunner {

	@Autowired
	private VaultTemplate vaultTemplate;

	public static void main(String[] args) {
		SpringApplication.run(HellovaultApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		VaultResponse response = vaultTemplate
				.opsForKeyValue("secret", VaultKeyValueOperationsSupport.KeyValueBackend.KV_2)
				.get("github");

		System.out.println("Value of github.oauth2.key");
		System.out.println("-------------------------");
		System.out.println(response.getData().get("github.oauth2.key"));
		System.out.println("-------------------------");
		System.out.println();

		// Let's print some data using the Transit backend.
		VaultTransitOperations transitOperations = vaultTemplate.opsForTransit();

		// We need to setup transit first (assuming you didn't set it up yet)
		VaultSysOperations sysOperations = vaultTemplate.opsForSys();

		if(!sysOperations.getMounts().containsKey("transit/")) {
			sysOperations.mount("transit", VaultMount.create("transit"));
			transitOperations.createKey("foo-key");
		}

		// Encrypt a plain text value
		String cipherText = transitOperations.encrypt("foo-key", "Secure message");

		System.out.println("Encrypted value");
		System.out.println("--------------------------");
		System.out.println(cipherText);
		System.out.println("--------------------------");
		System.out.println();

		// Decrypt

		String plainText = transitOperations.decrypt("foo-key", cipherText);
		System.out.println("Decrypted value");
		System.out.println("----------------------------");
		System.out.println(plainText);
		System.out.println("----------------------------");

	}
}
