package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Review;
@Repository
public class ReviewDao {
	@Autowired
	SqlSession session;
	
	public List<Review> bookreview() {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		List<Review> list = new ArrayList<Review>();
		list =mapper.bookreview();
		return list;
	}

	public int bookdelete(int rev_num) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		int a = 0;
		a = mapper.bookrdelete(rev_num);
		
		return a;
	}

	public Review selectOne(int rev_num) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		Review review= mapper.selectOne(rev_num);
		return review;
	}
	
	public Review addLike(int rev_num) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		Review review= mapper.selectOne(rev_num);
		mapper.addLike(rev_num);
		return review;
	}
	public int update(Review review) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		int a = 0;
		a = mapper.update(review);
		return a;
	}

	public int reviewDelete(int rev_num) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		int a = 0;
		a = mapper.reviewDelete(rev_num);
		return a;
	}
	
	public int reviewWrite(Review review) {
	      ReviewMapper mapper = session.getMapper(ReviewMapper.class);
	      int a = 0;
	      a = mapper.reviewWrite(review);
	      return a;
	   }


}
