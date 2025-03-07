package com.test.reto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.reto.dto.UsuarioDto;
import com.test.reto.service.IUsuarioService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private IUsuarioService iUsuarioService;

	@GetMapping("list")
	public @ResponseBody List<UsuarioDto> getUsers() {
		return iUsuarioService.getUsers();
	}

	@PostMapping("/save")
	public @ResponseBody UsuarioDto saveUser(@RequestBody UsuarioDto user) {
		return iUsuarioService.saveUser(user);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteUsuario(@RequestParam(value = "id") Integer id) {
		return iUsuarioService.deleteUsuario(id);
	}

}
