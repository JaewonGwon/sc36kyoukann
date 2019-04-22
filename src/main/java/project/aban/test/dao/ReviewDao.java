package project.aban.test.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Reglike;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.Review;
@Repository
public class ReviewDao {
	@Autowired
	SqlSession session;

	public void insertCountLike(ReglikeCheck rlc) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		System.out.println(rlc);
		mapper.insertCountLike(rlc);
		
		
	}

	public List<ReglikeCheck> findmyfan(String id) {
		List<ReglikeCheck> list = new ArrayList<>();
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		list = mapper.findmyfan(id);
		
		return list;
	}

	
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
		mapper.addLike(rev_num);
		Review review= mapper.selectOne(rev_num);
		
		return review;
	}
	
	public Review delLike(Reglike regl) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		mapper.delLike(regl);
		Review review= mapper.selectOne(regl.getRev_num());
		
	
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

	public List<Review> selectbydate() {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		List<Review> list = new ArrayList<Review>();
		list =mapper.selectbydate();
		return list;
	}
	
	public List<Review> ranking() {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		List<Review> list = new ArrayList<Review>();
		list =mapper.ranking();
		return list;
	}

	public List<Reglike> checklike(Reglike rl) {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		List<Reglike> regl = new ArrayList<>();
	    regl = mapper.checklike(rl);
	   
		return regl;
	}

	public void insertCheckLike(Reglike rl) {
		// TODO Auto-generated method stub
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		mapper.insertCheckLike(rl);
		
	}

	public ArrayList<Review> request_main_review() {
		
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		ArrayList<Review> result = mapper.request_main_review();
		return result;
	}

	public ArrayList<Review> reviewTitleSearch(String input) {
		
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		ArrayList<Review> result = mapper.reviewTitleSearch(input);
		
		return result;
	}
	
	public ArrayList<Review> reviewContentSearch(String input) {
		
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		ArrayList<Review> result = mapper.reviewContentSearch(input);
		
		return result;
	}

	public List<Review> selectbylike() {
		ReviewMapper mapper = session.getMapper(ReviewMapper.class);
		List<Review> list = new ArrayList<Review>();
		list =mapper.selectbylike();
		return list;
	}

	public String request_review_image(String book_title) {
		BookMapper mapper = session.getMapper(BookMapper.class);
		String result = mapper.request_review_image(book_title);
		return result;
	}
	

	

}
