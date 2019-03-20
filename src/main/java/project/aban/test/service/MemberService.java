package project.aban.test.service;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import project.aban.test.dao.MemberDao;
import project.aban.test.vo.Member;

@Service
public class MemberService {

	@Autowired
	MemberDao dao;
	
    @Inject
    PasswordEncoder passwordEncoder;
	
    /*濡쒓렇�씤*/
	public Member loginCheck(Member member) throws Exception {
		
		Member id = dao.getOne(member);
		
		try {
			
			String rawPw = member.getPw(); //�궗�슜�옄媛� �엯�젰�븳 pw
			String pw = id.getPw(); //�븫�샇�솕 �맂 pw
			
			if (passwordEncoder.matches(rawPw, pw)) {
				System.out.println("鍮꾨�踰덊샇 �씪移�");
				
				Member m = null;
				m=dao.loginCheck(member);
				
				return m;
			}else {
				System.out.println("鍮꾨�踰덊샇 遺덉씪移�");
				
				return null;
			}
		
		} catch (NullPointerException npe) {
			
		}
		return null;
		
		
		
	}
	
	
	/*�쉶�썝�젙蹂댁궫�엯*/
    public void insert_Member(Member vo) throws Exception {
        
        System.out.println("�븫�샇�솕...");

        String encPassword = passwordEncoder.encode(vo.getPw());
        vo.setPw(encPassword);
        //System.out.println("�븫�샇�솕�맂 鍮꾨�踰덊샇 : "+user.getUserPassword());

        dao.insert_Member(vo);
        System.out.println(vo);
	
    }
	
}
