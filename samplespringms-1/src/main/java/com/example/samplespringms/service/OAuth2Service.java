package com.example.samplespringms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.samplespringms.dao.OAuth2Dao;

@Service
public class OAuth2Service {
	
	
	@Autowired
	private OAuth2Dao oAuth2Dao;
	
	public String getSampleOAuth2() {
		
		System.out.println("in service");
		return oAuth2Dao.getSampleOAuth2();
	}
}
