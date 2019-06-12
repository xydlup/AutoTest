package com.course.controller;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class Index {
	@GetMapping("/hello")
	private String getIndex() throws UnknownHostException {
		// TODO Auto-generated method stub
//		System.out.println(InetAddress.getLocalHost().getHostAddress());
		return "/newfile";
	}
	
	@GetMapping("/index")
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	private String getMain() {
		// TODO Auto-generated method stub
		return "main";
	}
}
