import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PestamosService {

  constructor(private http:HttpClient) { }

  getPestamo(id:string){
    return this.http.get("http://localhost:8000/prestamos_usuario/"+id);
  }
  getPestamo_detalle(id:string){
    return this.http.get("http://localhost:8000/prestamos_destalle/"+id);
  }
}
