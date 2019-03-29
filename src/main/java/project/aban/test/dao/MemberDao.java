package project.aban.test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Member;

@Repository
public class MemberDao {

	@Autowired
	SqlSession session;
	
	public Member loginCheck(Member member) {
		
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.loginCheck(member);
		return m;
	}

	public int insert_Member(Member member) {
		System.out.println(member.toString());
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		int result = 0;
		result = mapper.insert_Member(member);
		return result;
	}
	/*암호 디코드를 위한 id 조회*/
	public Member getOne(Member member) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.getOne(member);
		return m;
		
	}

	public Member idFind(Member member) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.idFind(member);
		return m;
	}

	public Member pwCheck(Member member) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.pwCheck(member);
		
		return m;
	}

	public void pwUpdate(Member member) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		mapper.pwUpdate(member);
		
		
	}

}
