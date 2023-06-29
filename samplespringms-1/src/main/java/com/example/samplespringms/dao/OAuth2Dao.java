package com.example.samplespringms.dao;

import org.springframework.stereotype.Repository;

@Repository
public class OAuth2Dao {
	
	public String getSampleOAuth2() {
		
		System.out.println("in DAO");
		
		return "Hello";
	}
	
}
