package project.aban.test.controller;
 
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.annotation.SessionScope;

import com.sun.mail.handlers.message_rfc822;

import project.aban.test.service.DataService;
import project.aban.test.service.MemberService;
import project.aban.test.service.ReviewService;
import project.aban.test.vo.Member;
import project.aban.test.vo.Reglike;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.Review;


@Controller
public class MyController {
	
	@Autowired
	DataService ds;
	
	@Autowired
	MemberService ms;
	
	@Autowired
	ReviewService rs;
	
	
	@RequestMapping("/test")
	public void testing() {
		int a = (int)Math.pow(2,  -1);
		System.out.println(a);
	}
	
	@RequestMapping("/profile")
	public String profile(/*HttpSession session*/) {
		/*String id =(String)session.getAttribute("loginId");
		System.out.println("���̵��" + id);
		List<ReglikeCheck> list = new ArrayList<>(); 
		list = rs.findmyfan(id);
	
		session.setAttribute("list", list);
		System.out.println("테스토 " + session.getAttribute("list"));
		*/
		return "mypage";
	}
	
	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	@ResponseBody
	public List<ReglikeCheck> profile(HttpSession session) {
		String id =(String)session.getAttribute("loginId");
	
		List<ReglikeCheck> list = new ArrayList<>(); 
		list = rs.findmyfan(id);
		
		
		return list;
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