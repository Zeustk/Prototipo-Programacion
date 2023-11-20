import { Component, Input } from '@angular/core';
import { Empleados } from 'src/app/Vehiculos/Interfaces/empleados.interface';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-registroempleados',
  templateUrl: './registroempleados.component.html',
  styleUrls: ['./registroempleados.component.css']
})
export class RegistroempleadosComponent {
   
  constructor(private ServicioEmpleado:EmpleadosService){}

  @Input() Empleados:Empleados = {
     Correo:'',
     Clave:'',
     Id:0,
     Cargo:0,
     Disponible:'SI'
  }

  ConsultarEmpleados(){
    console.log(this.ServicioEmpleado.Empleados)
  }

  Agregarempleado(){

    this.ConsultarEmpleados()

   if (this.Empleados.Correo=='' && this.Empleados.Clave==''){
    return;

    
   }
   

    this.ServicioEmpleado.RegistrarEmpleado(this.Empleados)
    .subscribe(resp =>{
     console.log(resp);
    });
}

}
