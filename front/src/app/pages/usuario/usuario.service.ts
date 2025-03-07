import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint = 'http://localhost:8080/usuario';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':this.createBasicAuthToken('admin','12345') })

  constructor(private http: HttpClient) { }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndPoint + '/list', { headers: this.httpHeaders });
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint + '/save', usuario, { headers: this.httpHeaders });
  }

  deleteUsuario(id: number): Observable<any> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<any>(this.urlEndPoint, { params, headers: this.httpHeaders });
  }
}
