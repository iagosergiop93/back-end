package com.spring.services;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.spring.entities.Account;
import com.spring.entities.User;

public class AccountService {
	
	private static final Logger logger = LogManager.getLogger();
	
	public AccountService() {
		super();
		logger.info("In AccountService constructor");
	}
	
	public com.spring.entities.Account createAccount(User User) {
		Account account = new Account();
		
		logger.debug("Account worked | " + account.toString());
		return account;
	}
	
	public Account getAccountByAccNumber(int accNumber) {
		Account account = null;
		
		return null;
	}
	
	public Double getBalance(int accNumber) {
		Account acc = getAccountByAccNumber(accNumber);
		if(acc == null) return null;
		return acc.getBalance();
	}
	
	public boolean deposit(int accNumber, double money) {
		if(money <= 0) return false;
		Account acc = getAccountByAccNumber(accNumber);
		if(acc == null) return false;
		
		acc.setBalance(acc.getBalance() + money);
		return true;
	}
	
	public boolean withdraw(int accNumber, double money) {
		if(money <= 0) return false;
		Account acc = getAccountByAccNumber(accNumber);
		if(acc == null) return false;
		
		double balance = acc.getBalance();
		if(balance - money < 0) return false;
		
		acc.setBalance(balance - money);
		return true;
	}
	
	public int generateAccountNumber() {
		int num = 0;
		while(num == 0 || accountNumAlreadyExist(num)) {
			num = (int) (Math.random()*10000);
			logger.debug("Number generated: " + num);
		}
		return num;
	}
	
	public boolean accountNumAlreadyExist(int num) {
		
		return false;
	}
	
}
