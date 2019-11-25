package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.atLeast;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.entities.Account;
import com.entities.Person;

public class AccountServiceTest2 {
	
	AccountService accServ;
	AccountService spyAccountServ;
	Person person;
	
	@BeforeEach
	public void initializeTest() {
		this.accServ = new AccountService();
		this.spyAccountServ = spy(this.accServ);
		this.person = new Person("Iago", 26, "some@gmail.com", "1234");
	}
	
	@Test
	public void createAccountTest() {
		when(spyAccountServ.generateAccountNumber()).thenReturn(0);
		assertEquals(null, spyAccountServ.createAccount(person));
		verify(spyAccountServ, atLeast(1)).generateAccountNumber();
	}
	
	@Test
	public void createAccountTest2() {
		when(spyAccountServ.generateAccountNumber()).thenReturn(1);
		Account res = spyAccountServ.createAccount(person);
		assertNotEquals(null, res);
		verify(spyAccountServ, atLeast(1)).generateAccountNumber();
	}
	
}
