package persistence;

import javax.persistence.*;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long UserID;
	@Column
	private String Username;
	@Column
	private String Password;
	@Column
	private String AccessLevel;
	
	public User(){}

	public User(String username, String password, String accessLevel) {
		super();
		Username = username;
		Password = password;
		AccessLevel = accessLevel;
	}

	public Long getUserID() {
		return UserID;
	}

	public void setUserID(Long userID) {
		UserID = userID;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getAccessLevel() {
		return AccessLevel;
	}

	public void setAccessLevel(String accessLevel) {
		AccessLevel = accessLevel;
	}
}
