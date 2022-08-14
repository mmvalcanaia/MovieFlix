package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entites.Review;
import com.devsuperior.movieflix.entites.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired 
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRespository;
	
	@Autowired
	private AuthService authService;
	
	public ReviewDTO addReview(ReviewDTO dto) {
		
		User user = new User();
		user = authService.authenticated();
		
		Review review = new Review();
		review.setMovie(movieRespository.getOne(dto.getMovieId()));
		review.setText(dto.getText());
		review.setUser(user);
		review = repository.save(review);
		return new ReviewDTO(review);
	}
	
}
