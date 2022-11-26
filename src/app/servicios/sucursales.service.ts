import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
import { ModelSucursal } from '../modelos/sucursal.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {


  //token : string= "";

  constructor(private http: HttpClient) {
    //this.token = this.seguridadServicio.ObtenerToken();
   }

   ObtenerRegistros(): Observable<ModelSucursal[]>{
    return this.http.get<ModelSucursal[]>(`${environment.urlApi}/sucursales`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModelSucursal>{
    return this.http.get<ModelSucursal>(`${environment.urlApi}/sucursales/${id}`)
  }

  CrearSucursal(modelo: ModelSucursal): Observable<ModelSucursal>{
    return this.http.post<ModelSucursal>(`${environment.urlApi}/sucursales`, modelo, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarSucursal(modelo: ModelSucursal): Observable<ModelSucursal>{
    return this.http.put<ModelSucursal>(`${environment.urlApi}/sucursales/${modelo.Id}`, modelo, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarSucursal(modelo: ModelSucursal): Observable<any>{
    return this.http.delete(`${environment.urlApi}/sucursales/${modelo.Id}`, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
