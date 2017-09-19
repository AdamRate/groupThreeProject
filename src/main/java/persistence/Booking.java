package persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long BookingID;
	private String CustomerID;
	private Long TicketID;
	private Integer Quantity;
	private Long ScreeningID;

	public Booking(){}

	public Booking(String customerID, Long ticketID, Integer quantity, Long screeningID) {
		CustomerID = customerID;
		TicketID = ticketID;
		Quantity = quantity;
		ScreeningID = screeningID;
	}

	public Long getBookingID() {
		return BookingID;
	}

	public void setBookingID(Long bookingID) {
		BookingID = bookingID;
	}

	public String getCustomerID() {
		return CustomerID;
	}

	public void setCustomerID(String customerID) {
		CustomerID = customerID;
	}

	public Long getTicketID() {
		return TicketID;
	}

	public void setTicketID(Long ticketID) {
		TicketID = ticketID;
	}

	public Integer getQuantity() {
		return Quantity;
	}

	public void setQuantity(Integer quantity) {
		Quantity = quantity;
	}

	public Long getScreeningID() {
		return ScreeningID;
	}

	public void setScreeningID(Long screeningID) {
		ScreeningID = screeningID;
	}
}
