import { Component, OnInit } from '@angular/core';
import { ModelProspecto } from 'src/app/modelos/prospecto.model';

@Component({
  selector: 'app-consultar-prospecto',
  templateUrl: './consultar-prospecto.component.html',
  styleUrls: ['./consultar-prospecto.component.css']
})
export class ConsultarProspectoComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModelProspecto[] = [];

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
