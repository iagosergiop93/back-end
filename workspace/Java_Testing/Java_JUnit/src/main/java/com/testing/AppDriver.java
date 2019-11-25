package com.testing;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.entities.Account;
import com.entities.Person;
import com.services.AccountService;
import com.services.PersonService;

public class AppDriver {
	
	private static final Logger logger = LogManager.getLogger();
	
	public static void main(String[] args) {
		Person person = new Person("Iago", 26, "some@gmail.com","1234");
		logger.info("Person created: " + person.toString());
		PersonService personServ = new PersonService();
		AccountService accServ = new AccountService();
		
		Account acc = personServ.registerPerson(person);
		logger.info("Account created: " + acc.toString());
		
		logger.info("Balance: " + accServ.getBalance(acc.getAccountNumber()));
		accServ.deposit(acc.getAccountNumber(), 100);
		logger.info("Balance: " + accServ.getBalance(acc.getAccountNumber()));
		accServ.withdraw(acc.getAccountNumber(), 15);
		logger.info("Balance: " + accServ.getBalance(acc.getAccountNumber()));
		
	}

}
