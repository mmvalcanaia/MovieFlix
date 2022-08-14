package com.devsuperior.movieflix.services;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entites.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	@Transactional
	public List<GenreDTO> findAll(){
		List<Genre> genres = repository.findAll();
		List<GenreDTO> dtos = genres.stream().map(g -> new GenreDTO(g)).collect(Collectors.toList());
		return dtos;
	}
	
}
