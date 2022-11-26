import { Component, OnInit } from '@angular/core';
import { ModelSucursal } from 'src/app/modelos/sucursal.model';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
import { PruebaService } from '../../../../servicios/prueba.service';

@Component({
  selector: 'app-consultar-sucursal',
  templateUrl: './consultar-sucursal.component.html',
  styleUrls: ['./consultar-sucursal.component.css']
})
export class ConsultarSucursalComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModelSucursal[] = [];

  constructor(private sucursalesService: SucursalesService) { }

  ngOnInit(): void {
    this.ObtenerListadoSucursales();
  }


  ObtenerListadoSucursales(){
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

}
