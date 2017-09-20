package persistence;

import javax.persistence.*;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long TicketID;
	@Column
	private String TicketType;
	@Column
	private Double Price;

	public Ticket(){}

	public Ticket(String ticketType, Double price) {
		super();
		TicketType = ticketType;
		Price = price;
	}

	public Long getTicketID() {
		return TicketID;
	}

	public void setTicketID(Long ticketID) {
		TicketID = ticketID;
	}

	public String getTicketType() {
		return TicketType;
	}

	public void setTicketType(String ticketType) {
		TicketType = ticketType;
	}

	public Double getPrice() {
		return Price;
	}

	public void setPrice(Double price) {
		Price = price;
	}
}
