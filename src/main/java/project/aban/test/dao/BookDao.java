package project.aban.test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Book;

@Repository
public class BookDao {
	
	@Autowired
	SqlSession session;
	
	public int insert_book(Book book) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		int result = mapper.insert_book(book);
		return result;
	}
	
	public Book select_book(Book book) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		Book result = mapper.select_book(book);
		return result;
	}
}
