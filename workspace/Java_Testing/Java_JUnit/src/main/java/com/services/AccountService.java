package com.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.entities.Account;
import com.entities.Person;

public class AccountService {
	
	private static final Logger logger = LogManager.getLogger();
	
	public static List<Account> list = new ArrayList<>();
	
	public Account createAccount(Person person) {
		Account account = new Account();
		account.setOwner(person);
		account.setAccountNumber(generateAccountNumber());
		
		if(account.getAccountNumber() == 0) {
			logger.debug("Account number failed | " + account.toString());
			return null;
		}
		
		logger.debug("Account worked | " + account.toString());
		return account;
	}
	
	public Account getAccountByAccNumber(int accNumber) {
		Account account = null;
		Iterator<Account> it = list.iterator();
		while(it.hasNext()) {
			account = it.next();
			if(account.getAccountNumber() == accNumber) return account;
		}
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
		Iterator<Account> it = list.iterator();
		while(it.hasNext()) {
			if(it.next().getAccountNumber() == num) return true;
		}
		return false;
	}
	
}
