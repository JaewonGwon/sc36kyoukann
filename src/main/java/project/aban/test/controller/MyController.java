package project.aban.test.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import project.aban.test.service.DataService;


@Controller
public class MyController {
	
	@Autowired
	DataService ds;
	
	@RequestMapping("/test")
	public void testing() {
		int a = (int)Math.pow(2,  -1);
		System.out.println(a);
	}
	@RequestMapping("/profile")
	public String profile() {
		return "mypage";
	}
	@RequestMapping("/recommend")
	public String recommend() {
		return "home";
	}
	@RequestMapping("/insert_data")
	public void insert_tags() {
		ds.data_handler();
	}
}