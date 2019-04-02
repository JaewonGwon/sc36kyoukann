package project.aban.test.dao;

import project.aban.test.vo.Book;

public interface BookMapper {
	public int insert_book(Book book);

	public Book select_book(Book book);
}
