import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  //Inicio de la aplicación
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    
    path:"",
    pathMatch: 'full',
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module")
                          .then(x=>x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module")
                          .then(x=>x.AdministracionModule)

  },
  //Modulo de gestion
  {
    path: "gestion",
    loadChildren: () => import("./modulos/gestion/gestion.module")
                          .then(x=>x.GestionModule)

  },
  {
    path:"**",
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
