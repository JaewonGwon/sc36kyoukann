package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import project.aban.test.vo.Book;
import project.aban.test.vo.Tag;
import project.aban.test.vo.TestVO;

public interface BookMapper {
	public int insert_book(ArrayList<Book> buffer_data);

	public List<Book> show_all_book();

	public Book select_book(Book book);

	public int insert_tag(List<Tag> tag_list);

	public List<String> select_all_tag();

<<<<<<< HEAD
	public ArrayList<Tag> show_tags();
=======
	public int insert_taglist(List<Map<String, String>> taglist);
	
	public int delete_taglist();
	
	public int delete_tag();
	
	
>>>>>>> 134a6be88ce9ae423962df46f3badc58e7d07a02

}
