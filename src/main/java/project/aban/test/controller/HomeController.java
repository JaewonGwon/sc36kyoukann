package project.aban.test.controller;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import project.aban.test.service.ReviewService;

@Controller
public class HomeController {
	

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		return "index";
	}
	
	@RequestMapping(value = "index", method = RequestMethod.GET)
	public String home() {
		
		return "index";
	}

	
	@RequestMapping(value = "UserTasteIndex", method = RequestMethod.GET)
	public String test() {
		
		return "UserTasteIndex";
	}



}
