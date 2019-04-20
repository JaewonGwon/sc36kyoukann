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
		ArrayList<Book> result = (ArrayList<Book>) dao.select_book_recommend();

		return result;
	}

	@RequestMapping("/showTags")
	@ResponseBody
	public ArrayList<Tag> showTags() {
		ArrayList<Tag> result = (ArrayList<Tag>) dao.showTags();
		System.out.println(result);
		return result;
	}

	@RequestMapping("/request_taglist")
	@ResponseBody
	public ArrayList<Tag> request_taglist() {
		ArrayList<Tag> result = (ArrayList<Tag>) dao.show_tags();
		return result;
	}

	@RequestMapping("/search_tag")
	@ResponseBody
	public ArrayList<Book> search_tag(String tag) {
		ArrayList<String> request_data = new ArrayList<>();
		String[] list = tag.split(",");
		for (int i = 0; i < list.length; i++) {
			request_data.add(list[i]);
		}
		ArrayList<Book> result = dao.search_book(request_data);
		return result;
	}

	@RequestMapping("/request_modalTag")
	@ResponseBody
	public ArrayList<String> request_modalTag(String book_title) {
		ArrayList<String> result = dao.request_modalTag(book_title);
		System.out.println(book_title);
		System.out.println(result);

		return result;
	}
	
	@RequestMapping("/request_hitAdd")
	@ResponseBody
	public Book request_hitAdd(String book_title) {
		int result = dao.request_hitAdd(book_title);

		System.out.println(result);
		Book thisBook = dao.selectOne(book_title);

		return thisBook;

	}

	@RequestMapping("/request_scrapAdd")
	@ResponseBody
	public Book request_scrapAdd(String book_title) {
		int result = dao.request_scrapAdd(book_title);

		System.out.println(result);
		Book thisBook = dao.selectOne(book_title);

		return thisBook;

	}

	@RequestMapping("/request_scrapMinus")
	@ResponseBody
	public Book request_scrapMinus(String book_title) {
		int result = dao.request_scrapMinus(book_title);

		System.out.println(result);
		Book thisBook = dao.selectOne(book_title);

		return thisBook;

	}

	@RequestMapping("/request_likeAdd")
	@ResponseBody
	public Book request_likeAdd(String book_title) {
		int result = dao.request_likeAdd(book_title);

		System.out.println(result);
		Book thisBook = dao.selectOne(book_title);

		return thisBook;

	}

	@RequestMapping("/request_likeMinus")
	@ResponseBody
	public Book request_likeMinus(String book_title) {
		int result = dao.request_likeMinus(book_title);

		System.out.println(result);
		Book thisBook = dao.selectOne(book_title);

		return thisBook;
	}

	@RequestMapping("/request_main_book")
	@ResponseBody
	public ArrayList<Book> request_main_book() {
		ArrayList<Book> result = dao.request_main_book();
		for (int i = 0; i < result.size(); i++) {
			if (result.get(i).getBook_content().length() > 300) {
				String _temp = result.get(i).getBook_content().substring(0, 297) + "...";
				result.get(i).setBook_content(_temp);
			}
		}
		return result;
	}

	@RequestMapping("/getUserInfo")
	@ResponseBody
	public Member getUserInfo(HttpSession session) {

		Member UserInfo = (Member) session.getAttribute("UserInfo");

		return UserInfo;
	}

}
