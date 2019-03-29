package project.aban.test.vo;

public class Review {
	   private int rev_num;      // 책번호
	   private String book_title;   // 책제목
	   private String id;      // 유저 아이디
	   private String regdate;      // 책 제목
	   private String rev_title;      // 책 저자
	   private String rev_content;   // 출판사
	   private int rev_like;// 날짜
	   private int rev_scrap;         // 책 가격
	   
	   public Review() {
	      super();
	      
	   }

	   public Review(int rev_num, String book_title, String id, String regdate, String rev_title, String rev_content,
	         int rev_like, int rev_scrap) {
	      this.rev_num = rev_num;
	      this.book_title = book_title;
	      this.id = id;
	      this.regdate = regdate;
	      this.rev_title = rev_title;
	      this.rev_content = rev_content;
	      this.rev_like = rev_like;
	      this.rev_scrap = rev_scrap;
	   }

	   public int getRev_num() {
	      return rev_num;
	   }

	   public void setRev_num(int rev_num) {
	      this.rev_num = rev_num;
	   }

	   public String getBook_title() {
	      return book_title;
	   }

	   public void setBook_title(String book_title) {
	      this.book_title = book_title;
	   }

	   public String getId() {
	      return id;
	   }

	   public void setId(String id) {
	      this.id = id;
	   }

	   public String getRegdate() {
	      return regdate;
	   }

	   public void setRegdate(String regdate) {
	      this.regdate = regdate;
	   }

	   public String getRev_title() {
	      return rev_title;
	   }

	   public void setRev_title(String rev_title) {
	      this.rev_title = rev_title;
	   }

	   public String getRev_content() {
	      return rev_content;
	   }

	   public void setRev_content(String rev_content) {
	      this.rev_content = rev_content;
	   }

	   public int getRev_like() {
	      return rev_like;
	   }

	   public void setRev_like(int rev_like) {
	      this.rev_like = rev_like;
	   }

	   public int getRev_scrap() {
	      return rev_scrap;
	   }

	   public void setRev_scrap(int rev_scrap) {
	      this.rev_scrap = rev_scrap;
	   }

	   @Override
	   public String toString() {
	      return "Review [rev_num=" + rev_num + ", book_title=" + book_title + ", id=" + id + ", regdate=" + regdate
	            + ", rev_title=" + rev_title + ", rev_content=" + rev_content + ", rev_like=" + rev_like
	            + ", rev_scrap=" + rev_scrap + "]";
	   }
	   
	}