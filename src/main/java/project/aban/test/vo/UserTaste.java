package project.aban.test.vo;

public class UserTaste {
	private String id;
	private String usertag;
	public UserTaste(String id, String usertag) {
		super();
		this.id = id;
		this.usertag = usertag;
	}
	public UserTaste() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsertag() {
		return usertag;
	}
	public void setUsertag(String usertag) {
		this.usertag = usertag;
	}
	@Override
	public String toString() {
		return "UserTaste [id=" + id + ", usertag=" + usertag + "]";
	}
	
	
	 
	
	
	
}
