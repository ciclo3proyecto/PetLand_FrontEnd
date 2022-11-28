import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../servicios/seguridad.service';
import { ModeloIdentificacion } from '../../modelos/identificar.modelo';
declare var $: any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {

  rol: number= 0;
  seInicioSesion : boolean= false;
  subs : Subscription = new Subscription();
  usuario: any = "";
  correo: any = "";

  constructor(private seguridadServicio : SeguridadService) { }

  ngOnInit(): void {

    this.subs = this.seguridadServicio.OptenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificacion) =>{
      this.seInicioSesion = datos.estaIdentificado;
      switch(datos.datos?.rol){
        case "Administrador":
          this.rol= 1; //IDENTIFICACION DE ADMINISTRADOR
          this.correo = datos.datos.correo
          this.usuario = datos.datos.nombre
          break;
        case "Asesor":
          this.rol= 2;//IDENTIFICACION DE EMPLEADO
          this.correo = datos.datos.correo
          this.usuario = datos.datos.nombre
          break;
        case "Cliente":
          this.rol= 3;//IDENTIFICACION DE CLIENTE
          this.correo = datos.datos.correo
          this.usuario = datos.datos.nombre
          break;
        default:
          this.rol= 0; //sin ningun inicio de sesion
      }
    })

  }

}
