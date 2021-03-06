
package project.aban.test.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import project.aban.test.service.ReviewService;
import project.aban.test.vo.Reglike;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.Review;

@Controller
public class ReviewController {
	
	@Autowired
	ReviewService rs;
	
	@RequestMapping(value = "/ranking", method = RequestMethod.GET)
	   @ResponseBody
	   public List<Review> ranking(HttpSession session) {
	      List<Review> list = new ArrayList<>();
	      list=rs.ranking();
	
	      return list;
	   }
	
	@RequestMapping(value = "/selectbylike", method = RequestMethod.GET)  	 
	   @ResponseBody
	   public List<Review> selectbylike(HttpSession session) {
	      List<Review> list = new ArrayList<>();
	      list=rs.selectbylike();
	      return list;
	   }
	
	@RequestMapping(value = "/selectbydate", method = RequestMethod.GET)  	 
	   @ResponseBody
	   public List<Review> selectbydate(HttpSession session) {
	      List<Review> list = new ArrayList<>();
	      list=rs.selectbydate();
	      
	      
	      return list;
	   }
	
	@RequestMapping(value = "/reviewWrite", method = RequestMethod.GET)
	public String reviewWrite() {
		return "review/reviewWrite";
	}
	@RequestMapping(value = "/bookreview", method = RequestMethod.GET)
	public String review() {
		return "review/review";
	}
	
	@RequestMapping(value = "/reviewInsert", method = RequestMethod.GET)
	   public String reviewInsert(Review review) {
	      System.out.println(review.toString());
	      int a = rs.reviewWrite(review);
	      if (a==1) {
	         return "redirect:/bookreview";
	      }
	      return "fail";
	   }

	@RequestMapping(value = "/review", method = RequestMethod.POST)
	@ResponseBody
	public List<Review> bookreview(HttpSession session) {
		List<Review> list = new ArrayList<>();
		list=rs.bookreview();
/*		if (list==null) {
			System.out.println("비어있음");
		}else {
			System.out.println("들어있음");
		}*/
		
		return list;
	}
	@RequestMapping(value = "/reviewDelete", method = RequestMethod.POST)
	public String reviewDelete(int rev_num, Model model) {
		int a=0;
		a=rs.reviewDelete(rev_num);
		System.out.println(a);
		
		if (a==1) {
			model.addAttribute("message", "삭제완료");
		}
		return "review/review";
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
	@ResponseBody
	public String reviewupdate(Review review) {
		System.out.println(review.toString());
		int a = rs.update(review);
		System.out.println(a);
		if (a == 1) {
			System.out.println("성공");
			System.out.println("수정반복");
			return "success";
		}else {
			return "fail";
		}
	}
	@RequestMapping(value = "/reviewDetail", method = RequestMethod.GET)
	public String reviewDetail(int rev_num, Model model,HttpSession session) {
		model.addAttribute("rev_num", rev_num);
		Review review = rs.selectOne(rev_num);

	
		model.addAttribute("review",review);
		return "review/reviewDetail";
	}
	
	@RequestMapping(value = "/getreviewDetail", method = RequestMethod.POST)
	@ResponseBody
	public Review getreviewDetail(int rev_num,Model model,HttpSession session) {
		//System.out.println(rev_num);
		
		Review review = rs.selectOne(rev_num);
		

		//model.addAttribute("review",review);
		
		//session.setAttribute("reviewD",review);
		//model.addAttribute("revnum", rev_num);
		return review;
	}
	
	@RequestMapping(value = "/addLike", method = RequestMethod.POST)
	@ResponseBody
	public int addLike(int rev_num, HttpSession session) {
		System.out.println(rev_num);
		
		Reglike rl = new Reglike();
		if (session.getAttribute("loginId") != null) {
			String id = (String)session.getAttribute("loginId");
			rl.setId(id);
			rl.setRev_num(rev_num);
			Reglike result = rs.request_revLike(rl);
			Review review = rs.selectOne(rev_num);
			ReglikeCheck rlc = new ReglikeCheck();
			rlc.setId(review.getId());
			rlc.setPushid(id);
			rlc.setRev_num(rev_num);
			
			if (result == null) {
				int status = rs.insert_revLike(rl);
				int tester = rs.addLike(rl.getRev_num());
				int whopush = rs.whopushlike(rlc);
				return status+1;
			} else {
				int status = rs.delete_revLike(rl);
				int tester = rs.delLike(rev_num);
				return status-1;
			}
		}
		
		return 0;
	}
	
	@RequestMapping("/reviewSearch")
	@ResponseBody
	public ArrayList<Review> reviewSearch(String input, HttpSession sess) {
		ArrayList<Review> result = new ArrayList<>();
		result = rs.reviewSearch(input);
		return result;
	}
	
	@RequestMapping("/request_review_image")
	@ResponseBody
	public String request_review_image(String book_title) {
		String result = rs.request_review_image(book_title);
		return result;
	}
}

