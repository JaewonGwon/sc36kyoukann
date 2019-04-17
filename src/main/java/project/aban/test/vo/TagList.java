package project.aban.test.vo;

public class TagList {
	private String book_num;
	private String tag;
	public TagList(String book_num, String tag) {
		super();
		this.book_num = book_num;
		this.tag = tag;
	}
	public String getBook_num() {
		return book_num;
	}
	public void setBook_num(String book_num) {
		this.book_num = book_num;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	@Override
	public String toString() {
		return "TagList [book_num=" + book_num + ", tag=" + tag + "]";
	}
	
	 
	
	
	
}
