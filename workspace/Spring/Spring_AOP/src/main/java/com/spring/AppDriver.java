package com.spring;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import com.spring.entities.Account;
import com.spring.entities.User;
import com.spring.services.UserService;

@ComponentScan
@Configuration
@EnableAspectJAutoProxy
public class AppDriver {
	
	public static void main(String[] args) {
		
		try(AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppDriver.class)) {
			
			// After Container Created
			User user1 = context.getBean(User.class);
			User user2 = context.getBean(User.class);
			
			// Testing prototype scope
			System.out.println("Is user1 the same instance of user2 ? " + (user1 == user2));
			
			// Getting a UserService
			UserService userService = context.getBean(UserService.class);
			
			// Checking initial bean properties
			Account acc1 = context.getBean(Account.class);
			user1.setEmail("email@gmail.com");
			acc1.setOwner(user1);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
