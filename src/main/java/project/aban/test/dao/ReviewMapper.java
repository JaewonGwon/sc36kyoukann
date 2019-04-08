package project.aban.test.dao;

import java.util.List;

import project.aban.test.vo.Review;

public interface ReviewMapper {

	List<Review> bookreview();

	int bookrdelete(int rev_num);

	Review selectOne(int rev_num);

	int update(Review review);

	int reviewDelete(int rev_num);
	
	

}
