package com.devsuperior.movieflix.services.exceptions;

//retorna o erro 403: usuario logado com token valido, porem nao pode acessar algum recurso
public class ForbiddenException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public ForbiddenException(String msg) {
		super(msg);
	}

}
