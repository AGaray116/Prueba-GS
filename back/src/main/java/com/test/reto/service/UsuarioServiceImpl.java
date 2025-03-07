package com.test.reto.service;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.test.reto.dto.UsuarioDto;
import com.test.reto.entity.Usuario;
import com.test.reto.repository.IUsuarioDAO;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

	private static final Logger log = LoggerFactory.getLogger(UsuarioServiceImpl.class);

	@Autowired
	private IUsuarioDAO iUsuarioDAO;

	@Override
	public List<UsuarioDto> getUsers() {
		return iUsuarioDAO.findAllByOrderByIdDesc().stream().map(UsuarioDto::new).collect(Collectors.toList());
	}

	@Override
	public UsuarioDto saveUser(UsuarioDto user) {
		UsuarioDto response = new UsuarioDto();
		try {
			response = new UsuarioDto(iUsuarioDAO.save(new Usuario(user)));
		} catch (Exception e) {
			log.info("Error: ", e);
		}

		return response;
	}

	@Override
	public ResponseEntity<?> deleteUsuario(Integer id) {
		try {
			iUsuarioDAO.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			log.info("Error: ", e);
			return null;
		}
	}

}
