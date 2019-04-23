package project.aban.test.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class RecommendController {

	@RequestMapping(value="/recommend", method=RequestMethod.GET)
	public String recommend() {
		
		return "recommend";
	}
	
}
