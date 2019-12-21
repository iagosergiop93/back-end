package com.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.spring.entities.Account;
import com.spring.entities.User;
import com.spring.services.AccountService;
import com.spring.services.UserService;

@Configuration
public class AppConfig {
	
	@Bean
	public UserService userService() {
		AccountService accService = new AccountService();
		return new UserService(accService);
	}
	
	@Bean
	public AccountService accountService() {
		return new AccountService();
	}
	
	@Bean(initMethod = "init")
	@Scope("prototype")
	public User user() {
		User user = new User();
		user.setEmail("testing@email.com");
		return user;
	}
	
	@Bean(initMethod = "init")
	@Scope("prototype")
	public Account account() {
		Account acc = new Account();
		acc.setBalance(10);
		return acc;
	}
	
}
