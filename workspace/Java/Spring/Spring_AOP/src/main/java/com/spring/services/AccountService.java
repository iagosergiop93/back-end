package com.spring.services;

import org.springframework.stereotype.Service;

import com.spring.entities.Account;
import com.spring.entities.User;

@Service
public class AccountService {
	
	public AccountService() {
		super();
	}
	
	public Account createAccount(User user) {
		Account account = new Account();
		account.setOwner(user);
		return account;
	}
	
	public Account getAccountByAccNumber(int accNumber) {
		Account account = null;
		return account;
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
		}
		return num;
	}
	
	public boolean accountNumAlreadyExist(int num) {
		
		return false;
	}
	
}
