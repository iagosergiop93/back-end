package com.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entities.Account;
import com.spring.entities.User;

@Service
public class UserService {
	
	private AccountService accService = null;
	
	public UserService() {
		super();
	}
	
	@Autowired
	public UserService(AccountService accServ) {
		this.accService = accServ;
	}
	
	public Account registerUser(User User) {
		if(!isUserValid(User)) {
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
