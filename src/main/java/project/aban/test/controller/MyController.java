package project.aban.test.controller;
 
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.annotation.SessionScope;

import com.sun.mail.handlers.message_rfc822;

import project.aban.test.service.DataService;
import project.aban.test.service.MemberService;
import project.aban.test.vo.Member;


@Controller
public class MyController {
	
	@Autowired
	DataService ds;
	
	@Autowired
	MemberService ms;
	
	@RequestMapping("/test")
	public void testing() {
		int a = (int)Math.pow(2,  -1);
		System.out.println(a);
	}
	@RequestMapping("/profile")
	public String profile(Model model,Member member) {
		
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
	
	@RequestMapping("/test_flask")
	public String test_flask() {
		return "testing";
	}
}