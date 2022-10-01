import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PestamosService } from 'src/app/servicio/pestamos.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any;
  prestamo: any;
  detalle_pretamo:any;
  constructor(private usurioserv: UsuarioService, private router: Router,
    private activedrouter: ActivatedRoute, private pestamosService:PestamosService) {
  }
  ngOnInit(): void {
    let id = this.activedrouter.snapshot.paramMap.get('id');//get id
    if (id) {
      this.usurioserv.getUsuario(id).subscribe(
        (resul: any) => {
          this.usuario = resul[0];
          console.log(this.usuario)
          this.traerPrestamos(id)
        },
        (error) => { console.log("Error: ", error) }
      );
    }
  }

  traerPrestamos(id:any){
    this.pestamosService.getPestamo(id).subscribe(
      (resul: any) => {
        this.prestamo = resul[0];
        console.log(this.usuario) 
        this.traerDetallePrestamo(this.prestamo.id);
      },
        (error) => { console.log("Error: ", error) }
      );

  }

  traerDetallePrestamo(id:any){
    this.pestamosService.getPestamo_detalle(id).subscribe(
      (resul: any) => {
        this.detalle_pretamo = resul;
       this.calculartotal(this.detalle_pretamo);
        console.log(this.usuario) 
      },
        (error) => { console.log("Error: ", error) }
      );

  }
total:any;
nu_libro:any;
  calculartotal(destalle_pres:any){
     this.total=0;
     this.nu_libro= destalle_pres.length;

    for (let index = 0; index < destalle_pres.length; index++) {
       this.total += destalle_pres[index].precio;
      
    }

  }





}
