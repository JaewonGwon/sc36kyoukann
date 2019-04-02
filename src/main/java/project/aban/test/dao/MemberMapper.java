package project.aban.test.dao;

import project.aban.test.vo.Member;

public interface MemberMapper {

	public Member loginCheck(Member member);

	public int insert_Member(Member member);

	public Member getOne(Member member);

	public Member idFind(Member member);

	public Member pwCheck(Member member);

	public void pwUpdate(Member member);
	
	public int updateMember(Member member);
}
