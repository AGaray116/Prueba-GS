package com.test.reto.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.test.reto.dto.UsuarioDto;

public interface IUsuarioService {

	public List<UsuarioDto> getUsers();
	
	public UsuarioDto saveUser(UsuarioDto user);
	
	public ResponseEntity<?> deleteUsuario(Integer id);
}
