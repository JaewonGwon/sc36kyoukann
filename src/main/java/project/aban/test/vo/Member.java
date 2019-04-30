package project.aban.test.vo;

public class Member {
	private String id;
	private String pw;
	private String name;
	private String display_name;
	private String gender;
	private int age;
	private String phone;
	private String address;
	private int point;
	private String contents;
	private String fb_url;
	private String tw_url;
	private String ins_url;
	
	public Member() {
		super();
	}

	public Member(String id, String pw, String name, String display_name, String gender, int age, String phone,
			String address, int point, String contents, String fb_url, String tw_url, String ins_url) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.display_name = display_name;
		this.gender = gender;
		this.age = age;
		this.phone = phone;
		this.address = address;
		this.point = point;
		this.contents = contents;
		this.fb_url = fb_url;
		this.tw_url = tw_url;
		this.ins_url = ins_url;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDisplay_name() {
		return display_name;
	}

	public void setDisplay_name(String display_name) {
		this.display_name = display_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	
	public String getFb_url() {
		return fb_url;
	}

	public void setFb_url(String fb_url) {
		this.fb_url = fb_url;
	}

	public String getTw_url() {
		return tw_url;
	}

	public void setTw_url(String tw_url) {
		this.tw_url = tw_url;
	}

	public String getIns_url() {
		return ins_url;
	}

	public void setIns_url(String ins_url) {
		this.ins_url = ins_url;
	}

	@Override
	public String toString() {
		return "Member [id=" + id + ", pw=" + pw + ", name=" + name + ", display_name=" + display_name + ", gender="
				+ gender + ", age=" + age + ", phone=" + phone + ", address=" + address + ", point=" + point
				+ ", contents=" + contents + ", fb_url=" + fb_url + ", tw_url=" + tw_url + ", ins_url=" + ins_url + "]";
	}
	
}
