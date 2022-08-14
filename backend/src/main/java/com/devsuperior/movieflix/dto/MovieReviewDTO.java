package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entites.Review;
import com.devsuperior.movieflix.entites.User;

public class MovieReviewDTO {
	
	private Long id;
	private String text;
	private Long movieId;
	private UserDTO user;
	
	private MovieReviewDTO() {
	}

	public MovieReviewDTO(Long id, String text, Long movieId, UserDTO user) {
		super();
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.user = user;
	}
	
	public MovieReviewDTO(Review review, User user) {
		id = review.getId();
		text = review.getText();
		movieId = review.getMovie().getId();
		this.user = new UserDTO(user);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
	
}
