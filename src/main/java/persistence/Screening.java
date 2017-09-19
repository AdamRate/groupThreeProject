package persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Time;

@Entity
public class Screening {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long ScreeningID;
	private Integer ScreenNumber;
	private Long MovieID;
	private Time TimeSlot;

	public Screening(){}

	public Screening(Integer screenNumber, Long movieID, Time timeSlot) {
		super();
		ScreenNumber = screenNumber;
		MovieID = movieID;
		TimeSlot = timeSlot;
	}

	public Long getScreeningID() {
		return ScreeningID;
	}

	public void setScreeningID(Long screeningID) {
		ScreeningID = screeningID;
	}

	public Integer getScreenNumber() {
		return ScreenNumber;
	}

	public void setScreenNumber(Integer screenNumber) {
		ScreenNumber = screenNumber;
	}

	public Long getMovieID() {
		return MovieID;
	}

	public void setMovieID(Long movieID) {
		MovieID = movieID;
	}

	public Time getTimeSlot() {
		return TimeSlot;
	}

	public void setTimeSlot(Time timeSlot) {
		TimeSlot = timeSlot;
	}
}
