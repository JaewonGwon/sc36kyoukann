package project.aban.test.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Book;
import project.aban.test.vo.Review;
import project.aban.test.vo.Tag;
import project.aban.test.vo.TagList;
import project.aban.test.vo.UserLikeSave;
import project.aban.test.vo.UserTag;
import project.aban.test.vo.UserTaste;

@Repository
public class BookDao {
	
	@Autowired
	SqlSession session;
	
	public int insert_book(ArrayList<Book> buffer_data) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.insert_book(buffer_data);
		return result;
	}


	public List<Book> show_all_book() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		List<Book> result = mapper.show_all_book();
		return result;
	}

	
	public Book select_book(Book book) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		Book result = mapper.select_book(book);

		return result;
	}


	public int insert_tag(List<Tag> tag_list) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.insert_tag(tag_list);
		
		return result;
	}
	
	public List<String> select_all_tag( ) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		List<String> result = mapper.select_all_tag();
		return result;
	}



	public ArrayList<Tag> show_tags() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Tag> result = mapper.show_tags();

		return result;
	}
	
	public int insert_taglist(List<Map<String, String>> taglist) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.insert_taglist(taglist);
		return result;
	}
	
	public int delete_taglist() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.delete_taglist();
		return result;
	}
	
	public int delete_tag() {
		BookMapper mapper =session.getMapper(BookMapper.class);
		int result = mapper.delete_tag();

		return result;
	}

	public List<Book> select_book_recommend() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		List<Book> result = mapper.select_book_recommend();
		return result;
	}


	public ArrayList<Book> search_book(ArrayList<String> taglist) {
		// TODO Auto-generated method stub
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Book> result = mapper.search_book(taglist);
		return result;
	}


	public ArrayList<String> request_modalTag(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<String> result = mapper.request_modalTag(book_title);
		 
		return result;
	}


	public int request_hitAdd(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_hitAdd(book_title);
		return result;
	}


	public Book selectOne(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		Book result = mapper.selectOne(book_title);
		return result;
	}


	public int request_scrapAdd(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_scrapAdd(book_title);
		return result;
	}


	public int request_scrapMinus(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_scrapMinus(book_title);
		return result;
	}


	public int request_likeAdd(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_likeAdd(book_title);
		return result;
		
	}


	public int request_likeMinus(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_likeMinus(book_title);
		return result;
	}



	public ArrayList<Tag> showTags() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Tag> result = mapper.showTags();
		
		return result;
		
	}
	public ArrayList<Book> request_main_book() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Book> result = mapper.request_main_book();

		return result;
	}


	public ArrayList<Book> request_wr_books(String tag) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		
		ArrayList<Book> result = mapper.request_wr_books(tag);
		
		return result;
	}

	public int request_userLikeSave(UserLikeSave userinfo1) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_userLikeSave(userinfo1);
		return result;
	}

	public int request_userLikeDelete(UserLikeSave userinfo1) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_userLikeDelete(userinfo1);
		return result;
	}


	public UserTag request_favor(String id) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		System.out.println(id);
		UserTag result = mapper.request_favor(id);
		return result;
	}


	public int request_logSaver(HashMap<String, String> inputMap) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.request_logSaver(inputMap);
		return result;
	}


	public ArrayList<Book> request_recommend_list(String gn) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Book> result = mapper.request_recommend_list(gn);
		return result;
	}


	public ArrayList<Book> request_main_book_modal() {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Book> result = mapper.request_main_book_modal();
		return result;
	}
	
	public ArrayList<Book> request_mypage_book(String id) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		ArrayList<Book> result = mapper.request_mypage_book(id);
		return result;
	}


}
