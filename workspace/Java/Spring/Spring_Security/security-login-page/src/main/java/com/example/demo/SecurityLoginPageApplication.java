package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class SecurityLoginPageApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityLoginPageApplication.class, args);
	}
	
	@GetMapping("/")
	public String entrypoint(Model model) {
		return "home";
	}
	
	@GetMapping("/home")
	public String home(Model model) {
		return "home";
	}
	
	@GetMapping("/login")
	public String login(Model model) {
		return "login";
	}
	
	@GetMapping("/hello")
	public String hello(Model model) {
		return "hello";
	}
	
}
