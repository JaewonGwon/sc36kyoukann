package project.aban.test.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import project.aban.test.service.MemberService;
import project.aban.test.vo.Member;

@Controller
public class MemberController {

	@Autowired
	MemberService ms;
	
	@RequestMapping(value="login", method=RequestMethod.GET)
	public String login() {
		return "member/loginForm";
	}
	
	
	@RequestMapping(value="loginCheck", method=RequestMethod.POST)
	public String login(HttpSession session, Member member,Model model) {
		/*Member m = ms.loginCheck(member);*/
		/*if (m==null) {
			model.addAttribute("loginFail", "로그인이 실패하였습니다.");
			return "member/loginForm";
		}*/
		try {
			ms.loginCheck(member);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "index";
	}
	
	@RequestMapping(value="/joinus", method= RequestMethod.GET)
	public String joinus() {
		System.out.println("회원가입 요청함!!");

		return "member/joinForm";
	}
	
	@RequestMapping(value="/joinus", method= RequestMethod.POST)
	public String joinus(Member member) {

		System.out.println(member);
		
		try {
			ms.insert_Member(member);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return "redirect:/";
	}
}
