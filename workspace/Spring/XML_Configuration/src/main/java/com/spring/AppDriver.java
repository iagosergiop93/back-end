package com.spring;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.spring.entities.Account;
import com.spring.entities.User;
import com.spring.services.UserService;

public class AppDriver {
	
	public static void main(String[] args) {
		
		// create and configure beans
		try(ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("entities.xml", "services.xml")) {
			
			// Creating User
			User user1 = context.getBean("user", User.class);
			User user2 = context.getBean("user", User.class);
			
			// Testing prototype scope
			System.out.println("Is user1 the same instance of user2 ? " + (user1 == user2));
			
			// Getting a UserService
			UserService userService = context.getBean("userService", UserService.class);
			
			// Checking initial bean properties
			Account acc1 = context.getBean("account", Account.class);
			acc1.setOwner(user1);
			
			System.out.println(user1.toString());
			System.out.println(acc1.toString());
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
}
