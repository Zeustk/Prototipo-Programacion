import { Component,EventEmitter,Input,Output } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Empleados } from '../interface/empleados.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion-emp',
  templateUrl: './inicio-sesion-emp.component.html',
  styleUrls: ['./inicio-sesion-emp.component.css']
})
export class InicioSesionEmpComponent {

  @Output() cambiarVisibilidadComponenteEmpleado = new EventEmitter<boolean>();

  constructor(private BuscarEmpleado:EmpleadosService){};

  @Input() Empleados: Empleados = {
    Correo:'',
    Clave: '',
    Id: 0,
    Id_Cargo: 0,
    Disponible: ''
  }
  

  buscarEmpleado(){
    if(this.Empleados.Correo.trim()=='' || this.Empleados.Clave.trim()==''){
      Swal.fire({
        title: 'Oops!',
        text: 'Error al Registrar Datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
    return
  }

  BuscarEmpleadoNew(){
    return this.DatoslimpiosEmpleado();
  }

  DatoslimpiosEmpleado(){
    this.Empleados.Correo='';
    this.Empleados.Clave='';
  }
  
  
  CargarInterfazE(){
   
    this.cambiarVisibilidadComponenteEmpleado.emit(false);
  
  }


  /*  CargarunEmpleadoo() {
    this.BuscarEmpleadoo.ConsultarEmpleados().subscribe(
      (Empleado:Empleados) =>{
        if (Empleado != null) {
          console.log('Resultado de la consulta del empleado:', Empleado);
          this.Empleados = Empleado;
        }
      },
      (error: any) => {
        console.error('Error al consultar TipoVehiculo:', error);
      }
    );
  }  */
  

}
