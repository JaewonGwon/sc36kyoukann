package project.aban.test.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.dao.BookDao;
import project.aban.test.dao.MemberDao;
import project.aban.test.dao.ReviewDao;
import project.aban.test.service.DataService;
import project.aban.test.vo.Book;
import project.aban.test.vo.Member;
import project.aban.test.vo.Review;
import project.aban.test.vo.Tag;
import project.aban.test.vo.UserLikeSave;
import project.aban.test.vo.UserTag;

@Controller
public class AjaxController {

	@Autowired
	DataService ds;
	
	@Autowired
	BookDao dao;

	@Autowired
	ReviewDao rDao;

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
		System.out.println(dao.selectOne(book_title));
		System.out.println(book_title);
		System.out.println(result);

		return result;
	}


	public void request_hitAdd(String book_title) {
		int result = dao.request_hitAdd(book_title);
	}


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
	public Book request_likeAdd(String book_title, HttpSession session) {
		
		String id = (String) session.getAttribute("loginId");
		
		Book thisBook = dao.selectOne(book_title);
		
		UserLikeSave uls = new UserLikeSave();
		uls.setBook_title(book_title);
		uls.setId(id);
		if (mDao.request_userLike(uls)!=null) {
			return request_likeMinus(book_title, session);
		} else {
		int result = dao.request_likeAdd(book_title);
		UserLikeSave userinfo1 = new UserLikeSave();
		userinfo1.setId(id);
		userinfo1.setBook_title(book_title);
		
		int addResult = dao.request_userLikeSave(userinfo1);
		String gn = session.getAttribute("gn").toString();
		HashMap<String, String> inputMap = new HashMap<>();
		String ls = ds.book_num_gen(book_title);
		
		inputMap.put("log_seq", ls);
		inputMap.put("gn", gn);
		inputMap.put("book_title", book_title);
		System.out.println(inputMap);
		
		int logResult = dao.request_logSaver(inputMap);
		System.out.println(addResult+"save완료");
		System.out.println(result+"Add");
		
		return thisBook;
		}
	}

	@RequestMapping("/request_likeMinus")
	@ResponseBody
	public Book request_likeMinus(String book_title, HttpSession session) {
		String id = (String) session.getAttribute("loginId");
		Book thisBook = dao.selectOne(book_title);
		
		int result = dao.request_likeMinus(book_title);
		System.out.println(result + "Minus");

		UserLikeSave userinfo1 = new UserLikeSave();
		userinfo1.setId(id);
		userinfo1.setBook_title(book_title);

		int addResult = dao.request_userLikeDelete(userinfo1);
		
		System.out.println(addResult+"save완료");
		System.out.println(result+"Add");
				
		System.out.println(thisBook.getBook_likecount());

		return thisBook;
	}

	
	
	@RequestMapping("/request_main_book_modal")
	@ResponseBody
	public ArrayList<Book> request_main_book_modal() {
		ArrayList<Book> result = dao.request_main_book_modal();

		System.out.println(result+"모달값 체크");
		return result;
	}
	
	
	@RequestMapping("/request_main_book")
	@ResponseBody
	public ArrayList<Book> request_main_book() {
		ArrayList<Book> result = dao.request_main_book();
		for (int i = 0; i < result.size(); i++) {
			if (result.get(i).getBook_content().length() > 150) {
				String _temp = result.get(i).getBook_content().substring(0, 150) + "...";
				result.get(i).setBook_content(_temp);
			}
		}
		System.out.println(result);
		return result;
	}

	@RequestMapping("/getUserInfo")
	@ResponseBody
	public Member getUserInfo(HttpSession session) {

		Member UserInfo = (Member) session.getAttribute("UserInfo");

		return UserInfo;
	}

	@RequestMapping("/request_main_review")
	@ResponseBody
	public ArrayList<Review> request_main_review() {
		ArrayList<Review> result = rDao.request_main_review();
		for (int i = 0; i < result.size(); i++) {
			if (result.get(i).getRev_content().length() > 100) {
				String _temp = result.get(i).getRev_content().substring(0, 100) + "...";
				result.get(i).setRev_content(_temp);
			}
		}
		System.out.println(result+"값 체크 ");
		return result;
	}


	@RequestMapping(value = "/send_taste_data", method = RequestMethod.POST)
	public String send_taste_data(int[] sendDataToDB) {
		System.out.println("works");
		for (int i = 0; i < sendDataToDB.length; i++) {
			System.out.println(sendDataToDB[i]);
		}

		return "";
	}

	@RequestMapping("/request_wr_books")
	@ResponseBody
	public ArrayList<Book> request_wr_books(String tag) {
		System.out.println(tag);
		ArrayList<Book> result = dao.request_wr_books(tag);
		return result;
	}
	
	@RequestMapping("/favor")
	@ResponseBody
	public ArrayList<Integer> request_favor(String id, HttpSession sess) {
		int userAge = 0;
		UserTag result = new UserTag();
		System.out.println("favor : " + id);
		if(id != null) {
			result = dao.request_favor(id);
			Member member = new Member();
			member.setId(id);
			userAge = mDao.getOne(member).getAge();
		}
		ArrayList<Integer> resultList = new ArrayList<>();
		if(userAge == 10 || userAge == 20) {
			userAge = 1;
		} else if(userAge == 30) {
			userAge = 2;
		} else if(userAge == 40) {
			userAge = 3;
		} else if(userAge == 50) {
			userAge = 4;
		} else if(userAge == 60) {
			userAge = 5;
		}
		resultList.add(userAge);
		resultList.add(result.getQ1());
		resultList.add(result.getQ2());
		resultList.add(result.getQ3());
		resultList.add(result.getQ4());
		resultList.add(result.getQ5());
		resultList.add(result.getQ6());
		resultList.add(result.getQ7());
		resultList.add(result.getQ8());
		resultList.add(result.getQ9());
		resultList.add(result.getQ10());
		resultList.add(result.getQ11());
		resultList.add(result.getQ12());
		resultList.add(result.getQ13());
		return resultList;
	}
	
	@RequestMapping("/ai_recommend")
	@ResponseBody
	public String ai_recommend(int gn, HttpSession sess) {
		System.out.println("지급받은 Groupnumber : " + gn);
		sess.setAttribute("gn", gn);
		return gn + "";
	}
	
	@RequestMapping("/request_recommend_list")
	@ResponseBody
	public ArrayList<Book> request_recommend_list(HttpSession sess) {
		int gn = 0;
		if(sess.getAttribute("gn") != null )
			gn = (Integer)sess.getAttribute("gn");
		ArrayList<Book> result = ds.request_recommend_list(gn);
		return result;
	}
	
	@RequestMapping("/request_mypage_book")
	@ResponseBody
	public ArrayList<Book> request_mypage_book(HttpSession sess) {
		String id = "";
		if(sess.getAttribute("loginId") != null )
			id = (String)sess.getAttribute("loginId");
		ArrayList<Book> result = dao.request_mypage_book(id);
		return result;
	}
	
}
