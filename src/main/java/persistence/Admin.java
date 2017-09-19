package persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long AdminID;
	private Long UserID;
	private String Name;
	private String Email;

	public Admin(){}

	public Admin(Long userID, String name, String email) {
		super();
		UserID = userID;
		Name = name;
		Email = email;
	}

	public Long getAdminID() {
		return AdminID;
	}

	public void setAdminID(Long adminID) {
		AdminID = adminID;
	}

	public Long getUserID() {
		return UserID;
	}

	public void setUserID(Long userID) {
		UserID = userID;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}
}
