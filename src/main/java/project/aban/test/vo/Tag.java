package project.aban.test.vo;

public class Tag {
	
	private int tag_seq;
	private String tag;
	private int hit_count;
	private int tag_count;
	private String tag_image;
	public Tag() {
		super();
	}
	public Tag(int tag_seq, String tag, int hit_count, int tag_count, String tag_image) {
		super();
		this.tag_seq = tag_seq;
		this.tag = tag;
		this.hit_count = hit_count;
		this.tag_count = tag_count;
		this.tag_image = tag_image;
	}
	public int getTag_seq() {
		return tag_seq;
	}
	public void setTag_seq(int tag_seq) {
		this.tag_seq = tag_seq;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public int getHit_count() {
		return hit_count;
	}
	public void setHit_count(int hit_count) {
		this.hit_count = hit_count;
	}
	public int getTag_count() {
		return tag_count;
	}
	public void setTag_count(int tag_count) {
		this.tag_count = tag_count;
	}
	public String getTag_image() {
		return tag_image;
	}
	public void setTag_image(String tag_image) {
		this.tag_image = tag_image;
	}
	
	@Override
	public String toString() {
		return "Tag [tag_seq=" + tag_seq + ", tag=" + tag + ", hit_count=" + hit_count + ", tag_count=" + tag_count
				+ ", tag_image=" + tag_image + "]";
	}
	
	
	
	
}
