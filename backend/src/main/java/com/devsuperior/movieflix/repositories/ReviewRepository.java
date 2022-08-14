package com.devsuperior.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.movieflix.entites.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}
