package com.example.samplespringms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.samplespringms.service.OAuth2Service;

//@RequestMapping("/oAuth2")
//@RestController
public class OAuth2Controller {
	
	@Autowired
	private OAuth2Service oAuth2Service;
	
	@GetMapping("/sampleOAuth2")
	public String getSampleOAuth2() {
		
		System.out.println("in controlller");
		
		return oAuth2Service.getSampleOAuth2();
	}

}
