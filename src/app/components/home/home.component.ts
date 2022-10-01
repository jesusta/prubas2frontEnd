import { asNativeElements, Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usurioserv: UsuarioService, private router: Router) {
  }
  usuarios: any;
  id:any;
  idpersona:any=-1;
  ngOnInit(): void {

    this.cagarUsuario();

  }
 
  cagarUsuario() {

    this.usurioserv.getUsuarios().subscribe(result => this.usuarios = result);

  }
 

  inf_usuario() {
 if(this.idpersona!=-1){
    this.router.navigate(['usuarios/'+this.idpersona])
  }else{
    alert("Debe selecionar una opcion validad")
  }}
 
}
