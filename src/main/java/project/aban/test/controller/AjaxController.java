package project.aban.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.vo.Member;
import project.aban.test.vo.TestVO;

@Controller
public class AjaxController {
	
	@RequestMapping(value="/search", method=RequestMethod.GET)
	@ResponseBody
	public TestVO search() {
		TestVO result = new TestVO();
		
		result.setName("asd");
		result.setValue("aff");
		
		return result;
	}
	
}
