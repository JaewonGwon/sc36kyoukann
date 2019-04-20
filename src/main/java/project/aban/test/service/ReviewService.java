package project.aban.test.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.aban.test.dao.ReviewDao;
import project.aban.test.vo.Reglike;
import project.aban.test.vo.Review;

@Service
public class ReviewService {
	@Autowired
	ReviewDao dao;

	public List<Review> bookreview() {
		List<Review> list = new ArrayList<Review>();
		list = dao.bookreview();
		return list;
	}

	public int bookdelete(int rev_num) {
		int a = 0;
		a = dao.bookdelete(rev_num);
		return a;
	}

	public Review selectOne(int rev_num) {
		Review review = dao.selectOne(rev_num);
		return review;
	}

	public Review addLike(int rev_num) {
		Review review = dao.addLike(rev_num);
		return review;
	}
	
	public Review delLike(Reglike regl) {
		Review review = dao.delLike(regl);
		return review ;
	}

	public int update(Review review) {
		int a = 0;
		a = dao.update(review);
		return a;
	}

	public int reviewDelete(int rev_num) {
		int a = dao.reviewDelete(rev_num);
		return a;
	}

	public int reviewWrite(Review review) {
		int a = dao.reviewWrite(review);
		return a;
	}

	public List<Review> selectbydate() {
		List<Review> list = new ArrayList<Review>();
		list = dao.selectbydate();
		return list;
	}

	public List<Reglike> checklike(Reglike rl) {
		List<Reglike> regl = new ArrayList<>();
		regl = dao.checklike(rl);
		// TODO Auto-generated method stub
		return regl;
	}

	public void insertCheckLike(Reglike rl) {
		// TODO Auto-generated method stub
		dao.insertCheckLike(rl);
	}

	
	
}
