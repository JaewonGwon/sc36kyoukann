package project.aban.test.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class RecommendController {

	@RequestMapping(value="/recommend", method=RequestMethod.GET)
	public String recommend() {
		
		return "recommend";
	}
	
	@RequestMapping(value="/recommend_list", method=RequestMethod.GET)
	public String recommend_list(HttpSession session, String groupNo) {
		
		if(session.getAttribute("userid") != null) {
			
		} else {
			
		}
		
		return "";
	}
}
