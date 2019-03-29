
package project.aban.test.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.service.ReviewService;
import project.aban.test.vo.Review;

@Controller
public class ReviewController {
	
	@Autowired
	ReviewService rs;
	
	@RequestMapping(value = "/bookreview", method = RequestMethod.GET)
	public String review() {
		return "review/review";
	}

	@RequestMapping(value = "/review", method = RequestMethod.POST)
	@ResponseBody
	public List<Review> bookreview(Review rev_num, HttpSession session) {
		List<Review> list = new ArrayList<>();
		list=rs.bookreview();
		return list;
	}
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public String reviewdelete(int rev_num) {
		rs.bookdelete(rev_num);
		return "redirect:/bookreview";
	}
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String reviewupdate(int rev_num, HttpSession session) {
		Review review = rs.selectOne(rev_num);
		session.setAttribute("review",review);
		return "review/reviewUpdate";
	}
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String reviewupdate(Review review) {
		rs.update(review);
		
		return "review/review";
	}
	@RequestMapping(value = "/reviewDetail", method = RequestMethod.GET)
	public String reviewDetail(int rev_num, HttpSession session) {
		
		session.setAttribute("rev_num",rev_num);
		return "review/reviewDetail";
	}
	@RequestMapping(value = "/searchReview", method = RequestMethod.POST)
	@ResponseBody
	public Review reviewDetail(HttpSession session) {
		int rev_num=(int)session.getAttribute("rev_num");
		Review review = rs.selectOne(rev_num);
		
		return review;
	}
	
	
	
	
	@RequestMapping(value = "/reviewDetailTest", method = RequestMethod.GET)
	public String reviewDetail() {
		
		return "review/reviewDetailTest";
	}
	
}
