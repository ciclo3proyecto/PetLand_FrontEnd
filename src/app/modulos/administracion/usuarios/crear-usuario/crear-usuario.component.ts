import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloIdentificacion } from 'src/app/modelos/identificar.modelo';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ModelUsuario } from '../../../../modelos/usuario.model';
import { SeguridadService } from '../../../../servicios/seguridad.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  id: string = '';
  private password?: string = '';
  fgValidador: FormGroup = this.fb.group({
    'txtUsuario': ['', [Validators.required]],
    'txtClave': ['', [Validators.required]],
    'txtRol': ['', [Validators.required]],
    'txtCedula': ['', [Validators.required]],
    'txtNombres': ['', [Validators.required]],
    'txtApellidos': ['', [Validators.required]],
    'txtCiudad': ['', [Validators.required]],
    'txtEmail': ['', [Validators.required, Validators.email]],
    'txtTelefono': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService,
    private seguridadServicio : SeguridadService
  ) { }

  async ngOnInit(): Promise<void> {

    //validamos que este logueado
    this.seguridadServicio.OptenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificacion) =>{

      if (!datos.estaIdentificado){
        this.router.navigate(['/inicio']);
      }
    })

    //si es una modificación se guarda ID
    this.id = this.route.snapshot.params['id'];

    //Se busca los datos del registro si es una modificación
    if (this.id != undefined){
      await this.BuscarRegistro()
    }
  }

  private async BuscarRegistro() {
    this.usuariosService
      .ObtenerRegistrosPorId(this.id)
      .subscribe((datos: ModelUsuario) => {
        this.password = datos.Contrasena;
        this.fgValidador.controls['txtUsuario'].setValue(datos.Usuario);
        this.fgValidador.controls['txtClave'].setValue(datos.Contrasena);
        this.fgValidador.controls['txtRol'].setValue(datos.Rol);
        this.fgValidador.controls['txtCedula'].setValue(datos.Cedula);
        this.fgValidador.controls['txtNombres'].setValue(datos.Nombres);
        this.fgValidador.controls['txtApellidos'].setValue(datos.Apellidos);
        this.fgValidador.controls['txtCiudad'].setValue(datos.Ciudad);
        this.fgValidador.controls['txtEmail'].setValue(datos.Correo);
        this.fgValidador.controls['txtTelefono'].setValue(datos.Telefono);
      });
  }

  async ProcesarDatos() {
    let c = new ModelUsuario();
    c.Id = this.id;
    c.Usuario = this.fgValidador.controls['txtUsuario'].value;
    c.Contrasena = this.fgValidador.controls['txtClave'].value;
    c.Rol = this.fgValidador.controls['txtRol'].value;
    c.Cedula = this.fgValidador.controls['txtCedula'].value;
    c.Nombres = this.fgValidador.controls['txtNombres'].value;
    c.Apellidos = this.fgValidador.controls['txtApellidos'].value;
    c.Ciudad = this.fgValidador.controls['txtCiudad'].value;
    c.Correo = this.fgValidador.controls['txtEmail'].value;
    c.Telefono = this.fgValidador.controls['txtTelefono'].value;

    console.log(c);
    if (this.id != undefined){
      c.Contrasena = this.password;
      await this.ActualizarRegistro(c);

    } else {
      await this.CrearRegistro(c);
    }

    this.router.navigate(['/administracion/consultar-usuario']);
  }

  private async CrearRegistro(c: any) {
    this.usuariosService
      .CrearRegistro(c)
      .subscribe((datos: ModelUsuario) => {
        alert('Usuario creado con ID ' + datos.Id);
      }),
      (Error: any) => {
        alert('Error al crear usuario');
      };
  }

  private async ActualizarRegistro(c: any) {
    this.usuariosService
      .ActualizarRegistro(c)
      .subscribe((datos: ModelUsuario) => {
        alert('Usuario Actualizado');
      }),
      (error: any) => {
        alert('Error al Actualizar Usuario');
      };
  }

}
