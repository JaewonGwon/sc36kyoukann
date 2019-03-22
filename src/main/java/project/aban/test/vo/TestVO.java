package project.aban.test.vo;

public class TestVO {
	private String name;
	private String value;
	
	public TestVO() {
		
	}
	public TestVO(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
