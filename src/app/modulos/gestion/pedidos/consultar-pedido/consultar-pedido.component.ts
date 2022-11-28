import { Component, OnInit } from '@angular/core';
import { ModelPedidos } from 'src/app/modelos/pedidos.model';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit {

  pagina: number = 1;
  listadoRegistros: ModelPedidos[] = [];

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
