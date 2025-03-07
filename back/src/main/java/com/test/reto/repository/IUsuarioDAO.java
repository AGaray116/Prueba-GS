package com.test.reto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.reto.entity.Usuario;

public interface IUsuarioDAO extends JpaRepository<Usuario, Integer>{

	public List<Usuario> findAllByOrderByIdDesc();
	
}
