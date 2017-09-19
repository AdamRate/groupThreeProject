//package com.qa.cinema.service;
//
//import persistence.Movie;
//import util.JSONUtil;
//
//import javax.ejb.Stateless;
//import javax.enterprise.inject.Default;
//import javax.inject.Inject;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import javax.persistence.Query;
//import java.util.Collection;
//
//@Default
//@Stateless
//public class MovieDBImpl implements MovieService {
//
//	@PersistenceContext(unitName = "primary")
//	private EntityManager em;
//
//	@Inject
//	private JSONUtil util;
//
//	public String addMovie(String jsonMovie) {
//		Movie newMovie = util.getObjectForJSON(jsonMovie, Movie.class);
//		em.persist(newMovie);
//		return jsonMovie;
//	}
//
//
//	public String getMovies() {
//		Query query = em.createQuery("SELECT m FROM Movie m");
//		Collection<Movie> movies = (Collection<Movie>) query.getResultList();
//		return util.getJSONForObject(movies);
//	}
//
//}
