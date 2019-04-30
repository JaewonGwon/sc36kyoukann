package project.aban.test.controller;
 
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import project.aban.test.service.DataService;
import project.aban.test.service.FileService;
import project.aban.test.service.MemberService;
import project.aban.test.service.ReviewService;
import project.aban.test.vo.ReglikeCheck;
import project.aban.test.vo.UserProfile;


@Controller
public class MyController {
	
	@Autowired
	DataService ds;
	
	@Autowired
	MemberService ms;
	
	@Autowired
	ReviewService rs;
	
	final String uploadPath = "/userProfile"; // c:의 root에 만들어진다
	
	@RequestMapping("/test")
	public void testing() {
		int a = (int)Math.pow(2,  -1);
		System.out.println(a);
	}
	
	@RequestMapping("/profile")
	public String profile(Model model, HttpSession session) {
		
		String id =(String)session.getAttribute("loginId");
		UserProfile userProfile = rs.selectProfile(id);
		
		String mime = null;
		if (userProfile.getOriginalfile() == null ) {
			mime = "";
			
		}else {
			mime = "1";
			
		}
		
		model.addAttribute("mime", mime);
		System.out.println(mime+"check");
		
		
		
		
		
		
		
		/*String id =(String)session.getAttribute("loginId");
		System.out.println("���̵��" + id);
		List<ReglikeCheck> list = new ArrayList<>(); 
		list = rs.findmyfan(id);
	
		session.setAttribute("list", list);
		System.out.println("테스토 " + session.getAttribute("list"));
		*/
		return "mypage";
	}
	
	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	@ResponseBody
	public List<ReglikeCheck> profile(HttpSession session) {
		String id =(String)session.getAttribute("loginId");
	
		List<ReglikeCheck> list = new ArrayList<>(); 
		
		list = rs.findmyfan(id);
		
		
		return list;
}


	@RequestMapping("/recommend")
	public String recommend() {
		return "home";
	}
	@RequestMapping("/insert_data")
	public void insert_tags() {
		ds.data_handler();
	}
	
	@RequestMapping("/test_flask")
	public String test_flask() {
		return "testing";
	}
	
	
	@RequestMapping(value = "/profileUpdate", method = RequestMethod.POST)
	public String profileUpdate(UserProfile userProfile, MultipartFile upload, HttpSession session) {
		String loginId = (String) session.getAttribute("loginId"); 
		// 메퍼에 session 쓰기위해 요청하는 것
		
		
	    userProfile.setId(loginId);// 오류 안나게 채워주는것

		String originalfile = upload.getOriginalFilename();
		String savedFilename = FileService.saveFile(upload, uploadPath);
		
		
		System.out.println(loginId);
		System.out.println(originalfile);
		System.out.println(savedFilename);
		
		//오라클에 파일명 저장된는가?
		//c:/boardfile 위치에 이름이 변경되어 저장되는가?
		
		userProfile.setOriginalfile(originalfile);
		userProfile.setSavedfile(savedFilename);
		
		int result = rs.profileUpdate(userProfile);
		return "redirect:/profile";
	}
	
	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public String download(String id, HttpServletResponse response) {
		UserProfile userProfile = rs.selectProfile(id);

		//파일명 추출 
		
		String originalfile = userProfile.getOriginalfile();
		
		
		String savedfile = userProfile.getSavedfile();
		String fullpath = uploadPath+"/"+savedfile; //경로로 만들기위해 /삽입
		System.out.println(fullpath);
		System.out.println(originalfile+" "+savedfile);
		
		try {
			response.setHeader("Content-Disposition", "attatchment;filename="
			+ URLEncoder.encode(originalfile, "UTF-8"));
		} catch (UnsupportedEncodingException e1) {
			//없는 utf 나올수 있어서
			e1.printStackTrace();
		} // 원한는 방식대로 client 쪽으로 전달 가능 ,둘다 문자열/
		//content 헤드 통해서 한글 표현 가능 ,UTF-8 인코딩 
		
		FileInputStream filein = null;
		ServletOutputStream fileout = null; //abstract new못함 객체 생성안됨 
		
		
		try {
			filein = new FileInputStream(fullpath); //메모리는 이거 써줘야함 실제로 패스에 없을 수도 있어서
			fileout = response.getOutputStream(); //인터넷 통신 끊길수도 있어서 io exception 잡아야함
			FileCopyUtils.copy(filein, fileout);
			
			filein.close();
			fileout.close();
			//close 반드시  여기서 download는 끝남
			
			
		} catch (IOException e) { 
			//file not exist 보다 상위기때문에 io 만 써도 됨 
			e.printStackTrace();
		}
			//행위만 있다 화면전환 없이 따라서null도 가능 
		return null;

	}
	

}