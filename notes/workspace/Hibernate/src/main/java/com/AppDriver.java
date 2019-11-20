package com;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.entities.User;
import com.utils.HibernateUtil;

public class AppDriver {
	
	public static SessionFactory sf;
	
	public static void main(String[] args) {
		
		sf = HibernateUtil.getSessionFactory();
		Session session = sf.openSession();
		
		// Adding a user
		User user1 = new User();
		user1.setName("Zico");
		user1.setEmail("zico@gmail.com");
		user1.setPassword("1234");
		saveUser(user1, session);
		
		// Adding other user
		User user2 = new User();
		user2.setName("Pele");
		user2.setEmail("pele@gmail.com");
		user2.setPassword("1234");
		saveUser(user2, session);
		
		// Getting a list of users using Criteria
		List<User> list = selectAllUsersCriteria(session);
		System.out.println("Using Criteria");
		printList(list);
		
		// Getting a list of users using HQL
		list = selectAllUsersHQL(session);
		System.out.println("Using HQL");
		printList(list);
		
		// Getting a list of users using native SQL
		list = selectAllUsersNativeSQL(session);
		System.out.println("Using Native SQL");
		printList(list);
		
		sf.close();
	}
	
	public static void printList(List list) {
		if(list != null) {
			System.out.println("Printing list: ");
			for(Object item : list) {
				System.out.println("User: " + item.toString());
			}
		}
	}
	
	public static boolean saveUser(User user, Session session) {
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			System.out.println("User: " + user.toString());
			session.save(user);
			tx.commit();
			
		} catch(HibernateException e) {
			if(tx != null) tx.rollback();
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return true;
	}
	
	public static List<User> selectAllUsersCriteria(Session session) {
		List<User> list = null;
		try {
			Transaction tx = session.beginTransaction();
			
			// Creating Criteria
			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<User> criteria = cb.createQuery(User.class);
//			Root<User> root = criteria.from(User.class);
			criteria.select(root);
			
			list = session.createQuery(criteria).getResultList();
			
			tx.commit();
		
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	
	public static List<User> selectAllUsersHQL(Session session) {
		List<User> list = new ArrayList<>();
		try {
			Transaction tx = session.beginTransaction();
			// Create HQL Query
			list = session.createQuery("from User", User.class).getResultList();
			tx.commit();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	public static List<User> selectAllUsersNativeSQL(Session session) {
		List<User> list = null;
		
		try {
			Transaction tx = session.beginTransaction();
			// Create Native SQL Query
			list = session.createNativeQuery("SELECT * FROM users", User.class).getResultList();
			
//			System.out.println("Printing test");
//			for(Object[] item: list2) {
//				System.out.print(item[0] + " ");
//				System.out.print(item[1] + " ");
//				System.out.print(item[2] + " ");
//				System.out.println("");
//			}
			
			tx.commit();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
}
