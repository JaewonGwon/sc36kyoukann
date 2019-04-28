package project.aban.test.dao;

import java.util.ArrayList;

import project.aban.test.vo.Member;
import project.aban.test.vo.UserLikeSave;
import project.aban.test.vo.UserTag;
import project.aban.test.vo.UserTaste;

public interface MemberMapper {

	public Member loginCheck(Member member);

	public int insert_Member(Member member);

	public Member getOne(Member member);

	public Member idFind(Member member);

	public Member pwCheck(Member member);

	public void pwUpdate(Member member);
	
	public int updateMember(Member member);

	public Member selectid(String id);

	public Member getProfile(Member _temp);

	public int submit_content(Member m);

	public int insert_UserTag(UserTag usertag1);

	public UserTag request_favor(String id);

	public UserLikeSave request_userLike(UserLikeSave uls);

	public int insertUserProfile(String id);

}
