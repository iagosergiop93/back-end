package com.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.consumingwebservice.CountryClient;
import com.example.consumingwebservice.wsdl.GetCountryResponse;

@SpringBootApplication
public class ConsumeSoapApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConsumeSoapApplication.class, args);
	}
	
	@Bean
	CommandLineRunner lookup(CountryClient quoteClient) {
		return args -> {
			String country = "Poland";

			if (args.length > 0) {
				country = args[0];
			}
			GetCountryResponse response = quoteClient.getCountry(country);
			System.err.println("Response: " + response.getCountry().getCurrency());
		};
	}

}
