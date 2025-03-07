import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from './usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  title!: string;
  formUsuario!: FormGroup;
  usuarios: Usuario[] = [];
  edit!: boolean;
  response!: any;
  editar!:boolean;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    
    this.initForm();
    this.getListUser();
  }

  async getListUser() {
    this.usuarios = await this.usuarioService.getUsuarios().toPromise() || [];
  }

  initForm() {
    this.formUsuario = this.fb.group({
      'id': new FormControl(''),
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidoPaterno': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidoMaterno': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'fechaNacimiento': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  newUsuario() {
    this.editar=false;
    this.initForm();
    this.title = 'Nuevo Usuario'
  }
  
  editUsuario(usuario: Usuario) {
    this.editar=true;
    this.title = 'Editar usuario #' + usuario.id;
    this.formUsuario.get(['id'])?.setValue(usuario.id);
    this.formUsuario.get(['nombre'])?.setValue(usuario.nombre);
    this.formUsuario.get(['apellidoPaterno'])?.setValue(usuario.apellidoPaterno);
    this.formUsuario.get(['apellidoMaterno'])?.setValue(usuario.apellidoMaterno);
    this.formUsuario.get(['fechaNacimiento'])?.setValue(new Date(usuario.fechaNacimiento));
  }

  saveUsuario() {
    this.usuarioService.saveUsuario(this.formUsuario.getRawValue()).subscribe(
      response => {
        if(!this.editar){
          this.usuarios.unshift(response);
          this.messageService.add({ severity: 'info', summary: 'Operación exitosa', detail: 'Se agrego usuario' });

        }else{
          const element = (element: any) => element.id === response.id;
          const index = this.usuarios.findIndex(element);
          this.usuarios[index] = response;
          this.messageService.add({ severity: 'info', summary: 'Operación exitosa', detail: 'Se edito usuario' });

        }
      }
    );
  }

  async deleteUsuario(id: number) {
    await this.usuarioService.deleteUsuario(id).toPromise();
    this.messageService.add({ severity: 'info', summary: 'Operación exitosa', detail: 'Se elimino usuario' });
    this.usuarios = this.usuarios.filter(item => item.id != id );
  }

}