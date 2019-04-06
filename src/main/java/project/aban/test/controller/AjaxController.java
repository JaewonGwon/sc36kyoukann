package project.aban.test.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.dao.BookDao;
import project.aban.test.dao.MemberDao;
import project.aban.test.vo.Book;
import project.aban.test.vo.Member;
import project.aban.test.vo.Tag;

@Controller
public class AjaxController {
	
	@Autowired
	BookDao dao;
	
	@Autowired
	MemberDao mDao;
	
	@RequestMapping("/search")
	@ResponseBody

	public ArrayList<Book> search() {
		ArrayList<Book> result = (ArrayList<Book>) dao.show_all_book();

		
		return result;
	}
	
	
	@RequestMapping("/search_tag")
	@ResponseBody

	public ArrayList<Tag> search_tag() {
		ArrayList<Tag> result = (ArrayList<Tag>) dao.show_tags();

		
		return result;
	}
	
	@RequestMapping("/request_profile")
	@ResponseBody
	public Member request_profile(HttpSession session) {
		Member _temp = new Member();
		
		_temp.setId((String)session.getAttribute("loginId"));
		Member result = mDao.getProfile(_temp);
		return result;
	}
	
}

