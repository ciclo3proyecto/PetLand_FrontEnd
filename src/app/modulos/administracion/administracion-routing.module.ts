import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarPlanComponent } from './planes/consultar-plan/consultar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { ConsultarProductoServicioComponent } from './productos-servicios/consultar-producto-servicio/consultar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { ConsultarSucursalComponent } from './sucursales/consultar-sucursal/consultar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "editar-plan",
    component: EditarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  },
  {
    path: "consultar-plan",
    component: ConsultarPlanComponent
  },
  {
    path: "crear-producto-servicio",
    component: CrearProductoServicioComponent
  },
  {
    path: "editar-producto-servicio",
    component: EditarProductoServicioComponent
  },
  {
    path: "eliminar-producto-servicio",
    component: EliminarProductoServicioComponent
  },
  {
    path: "consultar-producto-servicio",
    component: ConsultarProductoServicioComponent
  },
  {
    path: "crear-sucursal/:id",
    component: CrearSucursalComponent
  },
  {
    path: "crear-sucursal",
    component: CrearSucursalComponent
  },
  {
    path: "consultar-sucursal",
    component: ConsultarSucursalComponent
  },
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "crear-usuario/:id",
    component: CrearUsuarioComponent
  },

  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent

  },
  {
    path: "consultar-usuario",
    component: ConsultarUsuarioComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
