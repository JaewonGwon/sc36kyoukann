package project.aban.test.service;

import javax.inject.Inject;

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
	
    /*로그인*/
	public Member loginCheck(Member member) throws Exception {
		
		Member id = dao.getOne(member);
		
		try {
			
			String rawPw = member.getPw(); //사용자가 입력한 pw
			String pw = id.getPw(); //암호화 된 pw
			
			if (passwordEncoder.matches(rawPw, pw)) {
				System.out.println("비밀번호 일치");
				
				Member m = null;
				m=dao.loginCheck(member);
				
				return m;
			}else {
				System.out.println("비밀번호 불일치");
				
				return null;
			}
		
		} catch (NullPointerException npe) {
			
		}
		return null;
		
		
		
	}
	
	
	/*회원정보삽입*/
    public void insert_Member(Member vo) throws Exception {
        
        System.out.println("암호화...");

        String encPassword = passwordEncoder.encode(vo.getPw());
        vo.setPw(encPassword);
        //System.out.println("암호화된 비밀번호 : "+user.getUserPassword());

        dao.insert_Member(vo);
        System.out.println(vo);
	
    }
	
}
