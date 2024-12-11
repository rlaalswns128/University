package com.questorm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/")
public class MainController {
	
	@GetMapping("")
	public String hello() {
		return "연결성공";
	}
}