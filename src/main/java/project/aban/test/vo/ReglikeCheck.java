package project.aban.test.vo;

import java.util.Date;

public class ReglikeCheck {
	private int rev_num;
	private String id; 
	private String pushid; 
	private String regdate;
	
	
	
	
	public ReglikeCheck() {
		super();
	}




	public ReglikeCheck(int rev_num, String id, String pushid, String regdate) {
		super();
		this.rev_num = rev_num;
		this.id = id;
		this.pushid = pushid;
		this.regdate = regdate;
	}




	public int getRev_num() {
		return rev_num;
	}




	public void setRev_num(int rev_num) {
		this.rev_num = rev_num;
	}




	public String getId() {
		return id;
	}




	public void setId(String id) {
		this.id = id;
	}




	public String getPushid() {
		return pushid;
	}




	public void setPushid(String pushid) {
		this.pushid = pushid;
	}




	public String getRegdate() {
		return regdate;
	}




	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}




	@Override
	public String toString() {
		return "ReglikeCheck [rev_num=" + rev_num + ", id=" + id + ", pushid=" + pushid + ", regdate=" + regdate + "]";
	}
	
	
	
}
