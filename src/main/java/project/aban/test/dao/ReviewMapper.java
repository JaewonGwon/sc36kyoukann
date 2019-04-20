package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;

import project.aban.test.vo.Reglike;
import project.aban.test.vo.Review;

public interface ReviewMapper {

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

	void delLike(Reglike regl);

}
