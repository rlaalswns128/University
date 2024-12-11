package com.supplements.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
	public String home() {
		return "index"; // index.jsp로 이동
	}

	@GetMapping("/about")
	public String about() {
		return "about"; // about.jsp로 이동
	}
}