import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

fgValidador: FormGroup = this.fb.group({
  'txtUsuario':['',[Validators.required]],  
  'txtClave':['',[Validators.required]],
  'txtPerfil':['',[Validators.required]],
  'txtNombres':['',[Validators.required]],
    'txtApellidos':['',[Validators.required]],
    'txtCedula':['',[Validators.required]],
    'txtCiudad':['',[Validators.required]],
    'txtEmail':['',[Validators.required, Validators.email]],
    'txtTelefono':['',[Validators.required]],
    
    
    
});

  constructor(private fb: FormBuilder,
              private router: Router,
              private servicioCliente: SucursalesService) { }

  ngOnInit(): void {
    
  }

}
