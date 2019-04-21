package project.aban.test.vo;

public class Reglike {
	private int rev_num; 
	private String id;
	
	
	
	
	public Reglike() {
		super();
	}




	public Reglike(int rev_num, String id) {
		super();
		this.rev_num = rev_num;
		this.id = id;
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




	@Override
	public String toString() {
		return "Reglike [rev_num=" + rev_num + ", id=" + id + "]";
	}
	
	
}
