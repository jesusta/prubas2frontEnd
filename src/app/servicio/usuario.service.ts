import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get("http://localhost:8000/usuarios");
  }
  getUsuario(id:string){
    return this.http.get("http://localhost:8000/usuarios/"+id);
  }
}
