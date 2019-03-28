package project.aban.test.vo;

public class Member {
	private String id;
	private String pw;
	private String email;
	private String name;
	private String display_name;
	private String gender;
	private String address;
	private int phone;
	private int point;
	public Member() {
		super();
	}
	public Member(String id, String pw, String email, String name, String display_name, String gender, String address,
			int phone, int point) {
		super();
		this.id = id;
		this.pw = pw;
		this.email = email;
		this.name = name;
		this.display_name = display_name;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
		this.point = point;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	@Override
	public String toString() {
		return "Member [id=" + id + ", pw=" + pw + ", email=" + email + ", name=" + name + ", display_name="
				+ display_name + ", gender=" + gender + ", address=" + address + ", phone=" + phone + ", point=" + point
				+ "]";
	}
	
	

}
