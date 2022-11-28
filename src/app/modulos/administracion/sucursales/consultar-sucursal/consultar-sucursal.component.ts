import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
import { SeguridadService } from '../../../../servicios/seguridad.service';
import { ModeloIdentificacion } from '../../../../modelos/identificar.modelo';

@Component({
  selector: 'app-consultar-sucursal',
  templateUrl: './consultar-sucursal.component.html',
  styleUrls: ['./consultar-sucursal.component.css']
})
export class ConsultarSucursalComponent implements OnInit {

  pagina: number = 1;
  listadoRegistros: ModelSucursal[] = [];

  constructor(private sucursalesService: SucursalesService,
              private router: Router,
              private seguridadServicio : SeguridadService
             ) { }

  ngOnInit(): void {
    //validamos que este logueado
    this.seguridadServicio.OptenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificacion) =>{

    if (!datos.estaIdentificado){
      this.router.navigate(['/inicio']);
    }
    })

    this.ObtenerListadoSucursales();
  }


  private ObtenerListadoSucursales(){
    this.sucursalesService
      .ObtenerRegistros()
      .subscribe((datos: ModelSucursal[]) => {
        this.listadoRegistros = datos;
    })
  }

  VerificarEliminacion(id?: string, direccion?: string){
    if(window.confirm(`Realmente desea eliminar esta sucursal con dirección ${direccion}`)){
      let modelo = new ModelSucursal();
      modelo.Id = id;
      modelo.Direccion = direccion;
      this.sucursalesService.EliminarSucursal(modelo).subscribe((datos) => {
        alert("La sucursal ha sido eliminada correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.Id != id);
      },(error) => {
        alert("Error eliminando sucursal ");
      });
    }
  }

  EditarRegistro(id?:string)
  {

    let url = "/administracion/crear-sucursal/"+id;
    this.router.navigate([url])
  }

}
