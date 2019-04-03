package project.aban.test.dao;

import java.util.List;

import project.aban.test.vo.Book;
import project.aban.test.vo.TestVO;

public interface BookMapper {
	public int insert_book(Book book);

	public List<TestVO> show_all_book();
}
