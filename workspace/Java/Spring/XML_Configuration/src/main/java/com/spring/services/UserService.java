package com.spring.services;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.spring.entities.Account;
import com.spring.entities.User;

public class UserService {
	
	private static final Logger logger = LogManager.getLogger();
	
	private AccountService accService = null;
	
	public UserService() {
		super();
		logger.info("In UserService constructor");
	}
	
	public UserService(AccountService accServ) {
		logger.info("In UserService constructor. Injecting AccountService");
		this.accService = accServ;
	}
	
	public Account registerUser(User User) {
		if(!isUserValid(User)) {
			logger.debug("User is invalid.");
			return null;
		}
		
		Account account = null;
		
		return account;
	}
	
	public boolean isUserValid(User User) {
		if(User.getName() == null || User.getName() == "" || User.getName().equals("")) return false;
		if(User.getEmail() == null || User.getEmail() == "" || User.getEmail().equals("")) return false;
		if(User.getPassword() == null || User.getPassword() == "" || User.getPassword().equals("") || User.getPassword().length() < 4) return false;
		
		return true;
	}
	
}
