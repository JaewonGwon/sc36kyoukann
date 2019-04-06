package project.aban.test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.dao.BookDao;
import project.aban.test.vo.TestVO;

@Controller
public class AjaxController {
	
	@Autowired
	BookDao dao;
	
	@RequestMapping("/search")
	@ResponseBody
	public List<TestVO> search() {
		
		return null;
	}
	
}

