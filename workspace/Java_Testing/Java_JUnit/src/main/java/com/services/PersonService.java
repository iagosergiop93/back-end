package com.services;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.entities.Account;
import com.entities.Person;

public class PersonService {
	
	private static final Logger logger = LogManager.getLogger();
	
	private static List<Person> list = new ArrayList<Person>();
	private AccountService accService = null;
	
	public PersonService() {
		this.accService = new AccountService();
	}
	
	public PersonService(AccountService accServ) {
		this.accService = accServ;
	}
	
	public Account registerPerson(Person person) {
		if(!isPersonValid(person)) {
			logger.debug("Person is invalid.");
			return null;
		}
		
		Account account = null;
		account =  accService.createAccount(person);
		if(account == null) {
			logger.debug("Account is invalid.");
			return null;
		}
		
		list.add(person);
		
		return account;
	}
	
	public boolean isPersonValid(Person person) {
		if(person.getName() == null || person.getName() == "" || person.getName().equals("")) return false;
		if(person.getAge() < 10) return false;
		if(person.getEmail() == null || person.getEmail() == "" || person.getEmail().equals("")) return false;
		if(person.getPassword() == null || person.getPassword() == "" || person.getPassword().equals("") || person.getPassword().length() < 4) return false;
		
		return true;
	}
	
}
