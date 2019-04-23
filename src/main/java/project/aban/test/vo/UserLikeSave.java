package project.aban.test.vo;

public class UserLikeSave {
	
	private String id;
	private String book_title;
	public UserLikeSave() {
		super();
	}
	public UserLikeSave(String id, String book_title) {
		super();
		this.id = id;
		this.book_title = book_title;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getBook_title() {
		return book_title;
	}
	
	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}
	
	@Override
	public String toString() {
		return "UserLikeSave [id=" + id + ", book_title=" + book_title + "]";
	}
	
	
	
}
