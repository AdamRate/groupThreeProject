package persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Screen {

	@Id
	private Integer ScreenNumber;

	private Integer SeatNumber;

	public Screen(){}

	public Screen(Integer screenNumber, Integer seatNumber) {
		super();
		ScreenNumber = screenNumber;
		SeatNumber = seatNumber;
	}

	public Integer getScreenNumber() {
		return ScreenNumber;
	}

	public void setScreenNumber(Integer screenNumber) {
		ScreenNumber = screenNumber;
	}

	public Integer getSeatNumber() {
		return SeatNumber;
	}

	public void setSeatNumber(Integer seatNumber) {
		SeatNumber = seatNumber;
	}
}
