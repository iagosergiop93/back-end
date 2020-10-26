package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.books.entities.Book;
import com.example.demo.books.repository.BookRepo;
import com.example.demo.people.entity.Person;
import com.example.demo.people.repository.PeopleRepo;

@SpringBootApplication
public class TwoDatasourcesApplication implements CommandLineRunner {
	
	@Autowired
	private PeopleRepo peopleRepo;
	
	@Autowired
	private BookRepo booksRepo;
	
	
	public static void main(String[] args) {
		SpringApplication.run(TwoDatasourcesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Person person = new Person();
		person.setName("John Doe");
		person.setJob("Developer");
		person.setHeight(1.8);
		
		peopleRepo.save(person);
		
		
		Book book = new Book();
		book.setId(1);
		book.setName("12-factor-app");
		
		booksRepo.save(book);
		
	}

}
