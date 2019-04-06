package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Book;
import project.aban.test.vo.Tag;

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
}
