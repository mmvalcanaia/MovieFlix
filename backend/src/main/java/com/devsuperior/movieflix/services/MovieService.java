package com.devsuperior.movieflix.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieMinDTO;
import com.devsuperior.movieflix.dto.MovieReviewDTO;
import com.devsuperior.movieflix.entites.Genre;
import com.devsuperior.movieflix.entites.Movie;
import com.devsuperior.movieflix.entites.Review;
import com.devsuperior.movieflix.entites.User;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly  = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("This movie id could not be found!"));
		return new MovieDTO(movie);
	}

	@Transactional(readOnly  = true)
	public List<MovieReviewDTO> findMovieReviews(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("This movie id could not be found!"));
		List<Review> list = movie.getReviews();
		List<MovieReviewDTO> dtos = new ArrayList<>();
		for (Review review : list) {
			User user = review.getUser();
			dtos.add(new MovieReviewDTO(review, user));
		}
		return dtos;
	}
	
	@Transactional(readOnly  = true)
	public Page<MovieMinDTO> findMoviesByGenre(Long genreId, Pageable pageable) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageable);
		return page.map(x -> new MovieMinDTO(x));
	}
	
}
