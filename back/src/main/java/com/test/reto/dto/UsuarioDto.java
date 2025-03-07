package com.test.reto.dto;

import java.util.Date;

import com.test.reto.entity.Usuario;

public class UsuarioDto {

	private Integer id;

	private String nombre;

	private String apellidoPaterno;

	private String apellidoMaterno;

	private Date fechaNacimiento;

	public UsuarioDto() {
		super();
	}

	public UsuarioDto(Usuario obj) {
		this.id = obj.getId();
		this.nombre = obj.getNombre();
		this.apellidoPaterno = obj.getApellidoPaterno();
		this.apellidoMaterno = obj.getApellidoMaterno();
		this.fechaNacimiento = obj.getFechaNacimiento();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidoPaterno() {
		return apellidoPaterno;
	}

	public void setApellidoPaterno(String apellidoPaterno) {
		this.apellidoPaterno = apellidoPaterno;
	}

	public String getApellidoMaterno() {
		return apellidoMaterno;
	}

	public void setApellidoMaterno(String apellidoMaterno) {
		this.apellidoMaterno = apellidoMaterno;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

}
