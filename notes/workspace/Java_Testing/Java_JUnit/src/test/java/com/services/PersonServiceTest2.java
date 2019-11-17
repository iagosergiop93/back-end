package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.entities.Account;
import com.entities.Person;

public class PersonServiceTest2 {
	
	AccountService mockAccServ;
	PersonService personServ;
	Person person;
	
	@BeforeEach
	public void initializeDependencies() {
		this.mockAccServ = mock(AccountService.class);
		this.personServ = new PersonService(mockAccServ);
		this.person = new Person("Iago", 26, "some@gmail.com", "1234");
	}
	
	@AfterEach
	public void destroyDependencies() {
		this.mockAccServ = null;
		this.personServ = null;
		this.person = null;
	}
	
	@Test
	public void registerPersonTest() {
		when(mockAccServ.createAccount(person)).thenReturn(null);
		assertEquals(null, personServ.registerPerson(person));
		verify(mockAccServ).createAccount(person);
	}
	
	@Test
	public void registerPersonTest2() {
		Account acc = new Account();
		when(mockAccServ.createAccount(person)).thenReturn(acc);
		assertEquals(acc, personServ.registerPerson(person));
		verify(mockAccServ).createAccount(person);
	}
	
}
