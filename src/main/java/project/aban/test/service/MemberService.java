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
			
			/*if (rawPw.equals(pw)) {
				Member m = null;
				m=dao.loginCheck(member);
				
				return m;
				
			}else {
				System.out.println("비밀번호 불일치");
				
				return null;
			}*/
			if (passwordEncoder.matches(rawPw, pw)) {
				System.out.println("비밀번호 일치");
				
				member.setPw(pw);
				
			}else {
				System.out.println("비밀번호 불일치");
				//member.setPw(pw);
			}
		} catch (NullPointerException npe) {
			Member mem = new Member();
			mem=null;
			System.out.println(mem);
			return mem;
		}
		return dao.loginCheck(member);
		
		
		
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
    
    //아이디 중복체크
  	public Member selectOne(Member member) {
  		// TODO Auto-generated method stub
  		System.out.println("아이디 중복체크");
  		Member m = dao.getOne(member);
  		
  		return m;
  	}


	public Member idFind(Member member) {
		Member m = dao.idFind(member);
		
		return m ; 
	}


	public Member pwCheck(Member member) {
		Member m = dao.pwCheck(member);
		
		return m;
	}

	

	public void pwUpdate(Member member) {
		String encPassword = passwordEncoder.encode(member.getPw());
		member.setPw(encPassword);
		dao.pwUpdate(member);
		
	}


public void updateMem(Member mem) throws Exception {
		 String encPassword = passwordEncoder.encode(mem.getPw());
		 mem.setPw(encPassword);
		 
		 dao.updateMember(mem);
	
	}


	
	
}
