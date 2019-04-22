package project.aban.test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.aban.test.vo.Member;
import project.aban.test.vo.UserTag;

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
	/*�븫�샇 �뵒肄붾뱶瑜� �쐞�븳 id 議고쉶*/
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
	
	public int updateMember(Member member) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		int a = mapper.updateMember(member);
		return a;
	}
	


	public Member selectid(String id) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.selectid(id);
		return m;
	}

	public Member getProfile(Member _temp) {
		// TODO Auto-generated method stub
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		Member m = mapper.getProfile(_temp);
		
		return m;
	}

	public int submit_content(Member m) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		int result = mapper.submit_content(m);
		return result;
	}

	public int insert_UserTag(UserTag usertag1) {
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		int result = mapper.insert_UserTag(usertag1);
		
		return result;
	}
	

}
