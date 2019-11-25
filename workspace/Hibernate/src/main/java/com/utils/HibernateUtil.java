package com.utils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.entities.Account;
import com.entities.User;

public class HibernateUtil {
	
	private static SessionFactory sessionFactory;
	
	private static SessionFactory buildSessionFactory() {
		SessionFactory sf = null;
		
		try {
			// Create the SessionFactory using hibernate.cfg.xml
			Configuration config = new Configuration();
			config.configure("hibernate.cfg.xml");
			
			config.addAnnotatedClass(Account.class);
			config.addAnnotatedClass(User.class);
			
			sf = config.buildSessionFactory();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return sf;
	}
	
	public static SessionFactory getSessionFactory() {
		if(sessionFactory != null) return sessionFactory;
		else sessionFactory = buildSessionFactory();
		return sessionFactory;
	}
	
}
