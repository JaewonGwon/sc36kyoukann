package project.aban.test.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import project.aban.test.service.DataService;


@Controller
public class MyController {
	
	@Autowired
	DataService ds;
	
	@RequestMapping("/profile")
	public String profile() {
		return "mypage";
	}
	@RequestMapping("/react")
	public String react() {
		return "home";
	}
	@RequestMapping("/testingJson")
	public void dsTest() {
		System.out.println("TEST");
		ds.testJson();
	}


	
}