import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarMascotaComponent } from './mascotas/consultar-mascota/consultar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ConsultarPedidoComponent } from './pedidos/consultar-pedido/consultar-pedido.component';
import { CrearPedidoComponent } from './pedidos/crear-pedido/crear-pedido.component';
import { EditarPedidoComponent } from './pedidos/editar-pedido/editar-pedido.component';
import { EliminarPedidoComponent } from './pedidos/eliminar-pedido/eliminar-pedido.component';
import { ConsultarProspectoComponent } from './prospectos/consultar-prospecto/consultar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';

const routes: Routes = [
  {
    path: "crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "editar-mascota",
    component: EditarMascotaComponent
  },
  {
    path: "eliminar-mascota",
    component: EliminarMascotaComponent
  },
  {
    path: "consultar-mascota",
    component: ConsultarMascotaComponent
  },
  {
    path: "crear-pedido",
    component: CrearPedidoComponent
  },
  {
    path: "editar-pedido",
    component: EditarPedidoComponent  
  },
  {
    path: "eliminar-pedido",
    component: EliminarPedidoComponent
  },
  {
    path: "consultar-pedido",
    component: ConsultarPedidoComponent
  },
  {
    path: "crear-prospecto",
    component: CrearProspectoComponent
  },
  {
    path: "editar-prospecto",
    component: EditarProspectoComponent
  },
  {
    path: "eliminar-prospecto",
    component: EliminarProspectoComponent
  },
  {
    path: "consultar-prospecto",
    component: ConsultarProspectoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
