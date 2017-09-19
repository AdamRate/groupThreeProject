package com.qa.cinema.rest;

import com.qa.cinema.service.MovieService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


@Path("/cinema")
public class MovieEndPoint {

	@Inject
	private MovieService movieService;

	@GET
	@Path("/json")
	@Produces({ "application/json" })
	public String getMoviesAsJson() {
		return movieService.getMovies();
	}

	@POST
	@Path("/json")
	@Produces({ "application/json" })
	public String addNewMovieToCinema(String movieJSONObject) {
		return movieService.addMovie(movieJSONObject);
	}


}
