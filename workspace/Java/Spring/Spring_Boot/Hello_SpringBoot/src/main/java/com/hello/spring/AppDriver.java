package com.hello.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class AppDriver {
	
	@RequestMapping("/")
	String home() {
		return (""
				+ "<h1>Hello World</h1>"
				+ "<br>"
				+ "<h4>Testing model</h4>");
	}
	
	public static void main(String[] args) {
		SpringApplication.run(AppDriver.class, args);
	}
	
}
