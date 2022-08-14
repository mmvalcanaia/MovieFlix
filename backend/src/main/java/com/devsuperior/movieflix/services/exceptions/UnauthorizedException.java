package com.devsuperior.movieflix.services.exceptions;

//retorna o erro 401: usuario logado com token invalido
public class UnauthorizedException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public UnauthorizedException(String msg) {
		super(msg);
	}

}
