package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;

import project.aban.test.vo.Book;
import project.aban.test.vo.TestVO;

public interface BookMapper {
	public int insert_book(ArrayList<Book> buffer_data);

	public List<TestVO> show_all_book();

	public Book select_book(Book book);

}
