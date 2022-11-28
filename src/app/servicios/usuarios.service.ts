import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelUsuario } from '../modelos/usuario.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  ObtenerRegistros(): Observable<ModelUsuario[]> {
    return this.http.get<ModelUsuario[]>(`${environment.urlApi}/usuarios`);
  }

  ObtenerRegistrosPorId(id: string): Observable<ModelUsuario> {
    return this.http.get<ModelUsuario>(
      `${environment.urlApi}/usuarios/${id}`
    );
  }

  CrearRegistro(modelo: ModelUsuario): Observable<ModelUsuario> {
    return this.http.post<ModelUsuario>(
      `${environment.urlApi}/usuarios`,
      modelo,
      {
        headers: new HttpHeaders({
          //'Authorization': `Bearer ${this.token}`
        }),
      }
    );
  }

  ActualizarRegistro(modelo: ModelUsuario): Observable<ModelUsuario> {
    return this.http.put<ModelUsuario>(
      `${environment.urlApi}/usuarios/${modelo.Id}`,
      modelo,
      {
        headers: new HttpHeaders({
          //'Authorization': `Bearer ${this.token}`
        }),
      }
    );
  }

  EliminarRegistro(modelo: ModelUsuario): Observable<any> {
    return this.http.delete(`${environment.urlApi}/usuarios/${modelo.Id}`, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      }),
    });
  }


}
