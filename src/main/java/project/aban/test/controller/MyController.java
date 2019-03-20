package project.aban.test.controller;
 
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class MyController {
 
	@RequestMapping("/react")
	public String react() {
		return "home";
	}
 
}