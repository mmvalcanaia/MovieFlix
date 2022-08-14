package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.movieflix.entites.Genre;
import com.devsuperior.movieflix.entites.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	@Query("SELECT obj FROM Movie obj INNER JOIN obj.genre g WHERE "
			+ "(:genre IS NULL OR g = :genre) "
			+ "ORDER BY title ASC")
	Page<Movie> find(Genre genre, Pageable pageable);
	
}
