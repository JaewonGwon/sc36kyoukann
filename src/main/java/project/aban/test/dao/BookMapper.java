package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import project.aban.test.vo.Book;
import project.aban.test.vo.Tag;

public interface BookMapper {
	public int insert_book(ArrayList<Book> buffer_data);

	public List<Book> show_all_book();

	public Book select_book(Book book);

	public int insert_tag(List<Tag> tag_list);

	public List<String> select_all_tag();

	public ArrayList<Tag> show_tags();
	
	public int insert_taglist(List<Map<String, String>> taglist);
	
	public int delete_taglist();
	
	public int delete_tag();

	public List<Book> select_book_recommend();

	public ArrayList<Book> search_book(ArrayList<String> taglist);

	public ArrayList<String> request_modalTag(String book_title);

	public int request_hitAdd(String book_title);

	public Book selectOne(String book_title);

	public int request_scrapAdd(String book_title);

	public int request_scrapMinus(String book_title);

	public int request_likeAdd(String book_title);

	public int request_likeMinus(String book_title);



}