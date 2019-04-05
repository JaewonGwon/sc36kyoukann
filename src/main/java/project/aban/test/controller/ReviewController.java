
package project.aban.test.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	public List<Review> bookreview() {
		List<Review> list = new ArrayList<>();
		list=rs.bookreview();
		if (list==null) {
			System.out.println("비어있음");
		}else {
			System.out.println("들어있음");
		}
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
	public String reviewDetail(int rev_num, Model model) {
		model.addAttribute("rev_num", rev_num);
		return "review/reviewDetail";
	}
	
	@RequestMapping(value = "/getreviewDetail", method = RequestMethod.POST)
	@ResponseBody
	public Review getreviewDetail(int rev_num) {
		//System.out.println(rev_num);
		System.out.println(rev_num);
		Review review = rs.selectOne(rev_num);
	
		//session.setAttribute("reviewD",review);
		//model.addAttribute("revnum", rev_num);
		return review;
	}
	
	@RequestMapping(value = "/addLike", method = RequestMethod.POST)
	@ResponseBody
	public Review addLike(int rev_num) {
		//System.out.println(rev_num);
		System.out.println(rev_num);
		Review review = rs.selectOne(rev_num);
		
		return review;
	}
	
	@RequestMapping(value = "/searchReview", method = RequestMethod.POST)
	@ResponseBody
	public Review searchReview(HttpSession session) {
		int rev_num=(int)session.getAttribute("rev_num");
		Review review = rs.selectOne(rev_num);
		
		return review;
	}
	
	
	

	
}

