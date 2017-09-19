package persistence;

import javax.persistence.*;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long CustomerID;
	@Column
	private Long UserID;
	@Column
	private String Name;
	@Column
	private String Address;
	@Column
	private String Email;

	public Customer(){}

	public Customer(Long userID, String name, String address, String email) {
		super();
		UserID = userID;
		Name = name;
		Address = address;
		Email = email;
	}

	public Long getCustomerID() {
		return CustomerID;
	}

	public void setCustomerID(Long customerID) {
		CustomerID = customerID;
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

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}
}
