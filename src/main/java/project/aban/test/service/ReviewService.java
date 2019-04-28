package project.aban.test.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.aban.test.dao.ReviewDao;
import project.aban.test.vo.Reglike;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.Review;
import project.aban.test.vo.UserProfile;

@Service
public class ReviewService {
	@Autowired
	ReviewDao dao;
	
	public void insertCountLike(ReglikeCheck rlc) {
		// TODO Auto-generated method stub
		dao.insertCountLike(rlc);
	}

	public List<ReglikeCheck> findmyfan(String id) {
		List<ReglikeCheck> list = new ArrayList<>();
		list = dao.findmyfan(id);
		
		return list;
	}



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

	public int addLike(int rev_num) {
		int result = dao.addLike(rev_num);
		return result;
	}
	
	public int delLike(int rev_num) {
		int result = dao.delLike(rev_num);
		return result;
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

	
	
	public List<Review> ranking() {
		List<Review> list = new ArrayList<Review>();
		list = dao.ranking();
		return list;
	}

	public ArrayList<Review> reviewSearch(String input) {
		ArrayList<Review> reviewByTitle= dao.reviewTitleSearch(input);
		ArrayList<Review> reviewByContent = dao.reviewContentSearch(input);
		//reviewByTitle List에 Content로 검색된 검색결과 붙이기.
		for(Review r : reviewByContent) {
			reviewByTitle.add(r);
		}
		return reviewByTitle;
	}

	public List<Review> selectbylike() {
		List<Review> list = new ArrayList<Review>();
		list = dao.selectbylike();
		return list;
	}

	public String request_review_image(String book_title) {
		String result = dao.request_review_image(book_title);
		return result;
	}

	public Reglike request_revLike(Reglike rl) {
		Reglike result = dao.request_revLike(rl);
		return result;	
	}

	public int insert_revLike(Reglike rl) {
		int tester = dao.insert_revLike(rl);
		int result = 0;
		if(tester != 0) {
			result = dao.selectOne(rl.getRev_num()).getRev_like();
		}
		return result;
	}

	public int delete_revLike(Reglike rl) {
		int tester = dao.delete_revLike(rl);
		int result = 0;
		if(tester != 0) {
			result = dao.selectOne(rl.getRev_num()).getRev_like();
		}
		return result;
	}

	public int whopushlike(ReglikeCheck rlc) {
		int a =0;
		a = dao.whopushlike(rlc);
		
		return a;
	}

	public int profileUpdate(UserProfile userProfile) {
		int result = dao.insertProfile(userProfile);
		return result;
	}

	public UserProfile selectProfile(String id) {
		UserProfile result = dao.selectProfile(id);
		return result;
	}

}
