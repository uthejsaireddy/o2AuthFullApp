package com.example.samplespringms;

import java.security.Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Samplespringms1Application {
	
	@GetMapping
	public String sample() {
		return "welcome to google";
	}
	
	@GetMapping("/user")
	public Principal uer(Principal principal) {
		return principal;
	}

	public static void main(String[] args) {
		
		System.out.println("in main running fine");
		
		SpringApplication.run(Samplespringms1Application.class, args);
	}

}
