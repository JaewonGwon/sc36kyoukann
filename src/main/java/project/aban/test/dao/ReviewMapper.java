package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;

import project.aban.test.vo.Reglike;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.Review;

public interface ReviewMapper {
	
	void insertCountLike(ReglikeCheck rlc);

	List<ReglikeCheck> findmyfan(String id);


	List<Review> bookreview();

	int bookrdelete(int rev_num);

	Review selectOne(int rev_num);

	int update(Review review);

	int reviewDelete(int rev_num);

	int reviewWrite(Review review);
	
	int addLike(int rev_num);

	List<Review> selectbydate();
	
	List<Review> ranking();

	List<Reglike> checklike(Reglike rl);

	void insertCheckLike(Reglike rl);

	int delLike(int rev_num);

	ArrayList<Review> request_main_review();

	
	//Title, Content 검색을 통해 리뷰 출력
	ArrayList<Review> reviewTitleSearch(String input);

	ArrayList<Review> reviewContentSearch(String input);

	List<Review> selectbylike();

	Reglike request_revLike(Reglike rl);

	int insert_revLike(Reglike rl);

	int delete_revLike(Reglike rl);

}
