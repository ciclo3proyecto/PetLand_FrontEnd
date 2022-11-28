import { Component, OnInit } from '@angular/core';
import { ModelPlan } from 'src/app/modelos/plan.model';

@Component({
  selector: 'app-consultar-plan',
  templateUrl: './consultar-plan.component.html',
  styleUrls: ['./consultar-plan.component.css']
})
export class ConsultarPlanComponent implements OnInit {

  pagina: number = 1;
  listadoRegistros: ModelPlan[] = [];

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
