package project.aban.test.vo;

public class UserProfile {


	private String id;
	private String originalfile;
	private String savedfile;
	public UserProfile() {
		super();
	}
	public UserProfile(String id, String originalfile, String savedfile) {
		super();
		this.id = id;
		this.originalfile = originalfile;
		this.savedfile = savedfile;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getOriginalfile() {
		return originalfile;
	}
	public void setOriginalfile(String originalfile) {
		this.originalfile = originalfile;
	}
	public String getSavedfile() {
		return savedfile;
	}
	public void setSavedfile(String savedfile) {
		this.savedfile = savedfile;
	}
	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", originalfile=" + originalfile + ", savedfile=" + savedfile + "]";
	}
	
	
	
	
	
	

	
}
