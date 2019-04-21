package project.aban.test.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.service.MemberService;
import project.aban.test.vo.Member;
import project.aban.test.vo.Review;

@Controller
public class MemberController {

	@Autowired
	MemberService ms;
	
	
	@RequestMapping(value = "/getinfo", method = RequestMethod.GET)
	@ResponseBody
	public Member getinfo(String id) {
		//System.out.println(rev_num);
		
		Member mem= ms.selectid(id);
		System.out.println("블랙핑크"+mem);
				return mem;
	}
	
	
	@ResponseBody
	@RequestMapping(value="/updateinfo", method= RequestMethod.POST)
	   public String updateinfo(Member member) {
	      System.out.println(member);
	      int a = ms.updateMem(member);
	      System.out.println(a);
	      if(a==1) {
	    	  System.out.println("성공쓰");
	    	  return "success";  
	      }else {
	    	  return "fail";
	      }
	      
	      }
	
	@RequestMapping(value="login", method=RequestMethod.GET)
	public String login() {
		return "member/loginForm";
	}
	
	@ResponseBody
	@RequestMapping(value="loginCheck", method=RequestMethod.POST)
	public String login(HttpSession session, Member member,Model model) {
		/*Member m = ms.loginCheck(member);*/
		
		System.out.println("로그인접근");
		try {
			System.out.println(ms+", " +member);
			Member m = ms.loginCheck(member);
			if (m==null) {
				
				return "fail";
			}
			String id = m.getId();
			session.setAttribute("loginId", id);
			session.setAttribute("m", m);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(session.getAttribute("loginId"));
		return "success";
	}
	
/*	public void IDsession(String id,HttpSession session) {
		session.setAttribute("loginId", id);
	}*/
	
	@RequestMapping(value="/joinus", method= RequestMethod.GET)
	public String joinus() {
		System.out.println("회원가입 요청함!!");

		return "member/joinForm";
	}
	
	//아이디 중복체크 
	@RequestMapping(value="duplicateCheck", method=RequestMethod.POST)
	public @ResponseBody int duplicateCheck(Member member) {
		Member m = ms.selectOne(member);
		
		if(m != null) return 1;		// 사용 불가능한 아이디
		else		  return 0;		// 사용 가능한 아이디
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

	@RequestMapping(value = "logout", method = RequestMethod.GET)
	   public String logout(HttpSession session) {
	      // code Here
	      // 로그아웃 처리를 위한 작업
	      session.invalidate();
	      // 로그아웃 후에는 첫 화면으로 이동
	      return "redirect:/";
	   }

	@RequestMapping(value="/joinSurvey", method= RequestMethod.GET)
	public String joinSurvey() {
		

		return "member/joinSurvey";
	}
	@RequestMapping(value="/findmyinfo", method= RequestMethod.GET)
	public String findmyinfo() {
		

		return "member/findmyinfo";
	}
	@RequestMapping(value="/idFind", method= RequestMethod.GET)
	public String idFind() {
		
		return "member/idFind";
	}
	@RequestMapping(value="/pwFind", method= RequestMethod.GET)
	public String pwFind() {
		
		return "member/pwFind";
	}
	
	@RequestMapping(value="/idFind", method= RequestMethod.POST)
	@ResponseBody
	public Member idFind(String name, String display_name) {
		Member member=new Member();
		member.setDisplay_name(display_name);
		member.setName(name);
		Member m = ms.idFind(member);	
		return m;
	}
	@RequestMapping(value="/pwFind", method= RequestMethod.POST)
	public String pwFind(String id, String name, String display_name, Model model, HttpSession session) {
		Member member=new Member();
		member.setId(id);
		member.setDisplay_name(display_name);
		member.setName(name);
		Member m = ms.pwCheck(member);
		int a =  (int) (1000000*Math.random());
		String b = a + "";
		
	    
	if (m == null) {
			model.addAttribute("message", "정보가 다릅니다 다시 입력해주세요.");
			return "member/pwFind";
		}else {
			m.setPw(b);
			ms.pwUpdate(m);
			session.setAttribute("sendPw", b);
			session.setAttribute("pwCheckMember", m);
			return "member/sendEmail";
		}
	}
}
