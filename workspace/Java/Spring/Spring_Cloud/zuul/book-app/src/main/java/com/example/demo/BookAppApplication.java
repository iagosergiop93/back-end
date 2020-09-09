package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@EnableDiscoveryClient
public class BookAppApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(BookAppApplication.class, args);
	}
	
	@RequestMapping(value = "/available")
	public String available() {
		return "Spring in Action";
	}
	
	@RequestMapping(value = "/checked-out")
	public String checkedOut() {
		return "Spring Boot in Action";
	}
	
	@RequestMapping(value = "/recommended")
	public String readingList() {
		return "Spring in Action (Manning), Cloud Native Java (O'Reilly), Learning Spring Boot (Packt)";
	}
	
}
