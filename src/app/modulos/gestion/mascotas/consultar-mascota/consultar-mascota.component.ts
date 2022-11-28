import { Component, OnInit } from '@angular/core';
import { ModelMascota } from 'src/app/modelos/mascota.model';

@Component({
  selector: 'app-consultar-mascota',
  templateUrl: './consultar-mascota.component.html',
  styleUrls: ['./consultar-mascota.component.css']
})
export class ConsultarMascotaComponent implements OnInit {

  pagina: number = 1;
  listadoRegistros: ModelMascota[] = [];

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
