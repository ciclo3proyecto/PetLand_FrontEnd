import { Component, OnInit } from '@angular/core';
import { ModelProductoServicio } from 'src/app/modelos/producto-servicio.model';

@Component({
  selector: 'app-consultar-producto-servicio',
  templateUrl: './consultar-producto-servicio.component.html',
  styleUrls: ['./consultar-producto-servicio.component.css']
})
export class ConsultarProductoServicioComponent implements OnInit {

  pagina: number = 1;
  listadoRegistros: ModelProductoServicio[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  VerificarEliminacion(id?: string, direccion?: string){
    /*if(window.confirm(`Realmente desea eliminar esta sucursal con dirección ${direccion}`)){
      let modelo = new ModelSucursal();
      modelo.Id = id;
      modelo.Direccion = direccion;
      this.sucursalesService.EliminarSucursal(modelo).subscribe((datos) => {
        alert("La sucursal ha sido eliminada correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.Id != id);
      },(error) => {
        alert("Error eliminando sucursal ");
      });
    }*/
  }

}
