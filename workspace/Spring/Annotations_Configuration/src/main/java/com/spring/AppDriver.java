package com.spring;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.spring.entities.Account;
import com.spring.entities.User;
import com.spring.services.UserService;

public class AppDriver {
	
	public static void main(String[] args) {
		
		try(AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class)) {
			
			// After Container Created
			User user1 = context.getBean(User.class);
			User user2 = context.getBean(User.class);
			
			// Testing prototype scope
			System.out.println("Is user1 the same instance of user2 ? " + (user1 == user2));
			
			// Getting a UserService
			UserService userService = context.getBean(UserService.class);
			
			// Checking initial bean properties
			Account acc1 = context.getBean(Account.class);
			acc1.setOwner(user1);
			
			System.out.println(user1.toString());
			System.out.println(acc1.toString());
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
