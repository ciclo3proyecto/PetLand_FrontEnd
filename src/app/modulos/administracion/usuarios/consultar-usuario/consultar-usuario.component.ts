import { Component, OnInit } from '@angular/core';
import { ModelUsuario } from 'src/app/modelos/usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { SeguridadService } from '../../../../servicios/seguridad.service';
import { ModeloIdentificacion } from '../../../../modelos/identificar.modelo';


@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {

  pagina: number = 1;

  listadoRegistros: ModelUsuario[] = [];

  constructor(
              private usuariosService: UsuariosService,
              private router: Router,
              private seguridadServicio : SeguridadService
  ) { }

  ngOnInit(): void {
    console.log("si entra en el oninit");

    //validamos que este logueado
     this.seguridadServicio.OptenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificacion) =>{

      if (!datos.estaIdentificado){
        this.router.navigate(['/inicio']);
      }
      })

      this.ObtenerListado();
  }

  private ObtenerListado(){
    this.usuariosService
      .ObtenerRegistros()
      .subscribe((datos: ModelUsuario[]) => {
        this.listadoRegistros = datos;
    })
    console.log(this.listadoRegistros);
  }

  VerificarEliminacion(id?: string, usuario?: string){
    if(window.confirm(`Realmente desea eliminar esta sucursal con dirección ${usuario}`)){
      let modelo = new ModelUsuario();
      modelo.Id = id;
      modelo.Usuario = usuario;
      this.usuariosService.EliminarRegistro(modelo).subscribe((datos) => {
        alert("El usuario ha sido eliminado correctamente.");
        this.listadoRegistros = this.listadoRegistros.filter(x => x.Id != id);
      },(error) => {
        alert("Error eliminando usuario ");
      });
    }
  }

  EditarRegistro(id?:string)
  {
    let url = "/administracion/crear-usuario/"+id;
    this.router.navigate([url])
  }


}
