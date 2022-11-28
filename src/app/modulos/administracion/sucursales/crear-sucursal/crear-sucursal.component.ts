import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloIdentificacion } from 'src/app/modelos/identificar.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
import { ModelSucursal } from '../../../../modelos/sucursal.model';
import { SeguridadService } from '../../../../servicios/seguridad.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css'],
})
export class CrearSucursalComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'txtDepartamento': ['', [Validators.required]],
    'txtCiudad': ['', [Validators.required]],
    'txtDireccion': ['', [Validators.required]],
    'txtTelefono': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sucursalesService: SucursalesService,
    private seguridadServicio : SeguridadService
  ) {}

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
    this.sucursalesService
      .ObtenerRegistrosPorId(this.id)
      .subscribe((datos: ModelSucursal) => {

        this.fgValidador.controls['txtDepartamento'].setValue(datos.Departamento);
        this.fgValidador.controls['txtCiudad'].setValue(datos.Ciudad);
        this.fgValidador.controls['txtDireccion'].setValue(datos.Direccion);
        this.fgValidador.controls['txtTelefono'].setValue(datos.Telefono);
      });
  }

  async ProcesarDatos() {
    let c = new ModelSucursal();

    c.Id = this.id;
    c.Ciudad = this.fgValidador.controls['txtCiudad'].value;
    c.Departamento = this.fgValidador.controls['txtDepartamento'].value;
    c.Direccion = this.fgValidador.controls['txtDireccion'].value;
    c.Telefono = this.fgValidador.controls['txtTelefono'].value;

    if (this.id != undefined){
      await this.ActualizarRegistro(c);
    } else {
      await this.CrearRegistro(c);
    }

    this.router.navigate(['/administracion/consultar-sucursal']);
  }

  private async CrearRegistro(c: any) {
    this.sucursalesService
      .CrearSucursal(c)
      .subscribe((datos: ModelSucursal) => {
        alert('Sucursal creado con ID ' + datos.Id);
      }),
      (Error: any) => {
        alert('Error al crear sucursal');
      };
  }

  private async ActualizarRegistro(c: any) {
    this.sucursalesService
      .ActualizarSucursal(c)
      .subscribe((datos: ModelSucursal) => {
        alert('Sucursal Actualizada');
      }),
      (error: any) => {
        alert('Error al Actualizar Sucursal');
      };
  }
}
