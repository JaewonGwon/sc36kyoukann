package project.aban.test.vo;

public class Book {
	private int book_num;
	private String book_index;
	private String book_title;
	private String book_image;
	private String book_writer;
	private String book_date;
	private String book_publisher;
	private String book_content;
	private String book_likecount;
	private String book_viewcount;
	private String book_scrapcount;
	public Book() {
		super();
	}
	public Book(int book_num, String book_index, String book_title, String book_image, String book_writer,
			String book_date, String book_publisher, String book_content, String book_likecount, String book_viewcount,
			String book_scrapcount) {
		super();
		this.book_num = book_num;
		this.book_index = book_index;
		this.book_title = book_title;
		this.book_image = book_image;
		this.book_writer = book_writer;
		this.book_date = book_date;
		this.book_publisher = book_publisher;
		this.book_content = book_content;
		this.book_likecount = book_likecount;
		this.book_viewcount = book_viewcount;
		this.book_scrapcount = book_scrapcount;
	}
	public int getBook_num() {
		return book_num;
	}
	public void setBook_num(int book_num) {
		this.book_num = book_num;
	}
	public String getBook_index() {
		return book_index;
	}
	public void setBook_index(String book_index) {
		this.book_index = book_index;
	}
	public String getBook_title() {
		return book_title;
	}
	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}
	public String getBook_image() {
		return book_image;
	}
	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}
	public String getBook_writer() {
		return book_writer;
	}
	public void setBook_writer(String book_writer) {
		this.book_writer = book_writer;
	}
	public String getBook_date() {
		return book_date;
	}
	public void setBook_date(String book_date) {
		this.book_date = book_date;
	}
	public String getBook_publisher() {
		return book_publisher;
	}
	public void setBook_publisher(String book_publisher) {
		this.book_publisher = book_publisher;
	}
	public String getBook_content() {
		return book_content;
	}
	public void setBook_content(String book_content) {
		this.book_content = book_content;
	}
	public String getBook_likecount() {
		return book_likecount;
	}
	public void setBook_likecount(String book_likecount) {
		this.book_likecount = book_likecount;
	}
	public String getBook_viewcount() {
		return book_viewcount;
	}
	public void setBook_viewcount(String book_viewcount) {
		this.book_viewcount = book_viewcount;
	}
	public String getBook_scrapcount() {
		return book_scrapcount;
	}
	public void setBook_scrapcount(String book_scrapcount) {
		this.book_scrapcount = book_scrapcount;
	}
	@Override
	public String toString() {
		return "Book [book_num=" + book_num + ", book_index=" + book_index + ", book_title=" + book_title
				+ ", book_image=" + book_image + ", book_writer=" + book_writer + ", book_date=" + book_date
				+ ", book_publisher=" + book_publisher + ", book_content=" + book_content + ", book_likecount="
				+ book_likecount + ", book_viewcount=" + book_viewcount + ", book_scrapcount=" + book_scrapcount + "]";
	}
	
	
	
	
}
