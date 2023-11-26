import { Component, Input } from '@angular/core';
import { Cargos, Empleados } from 'src/app/Empleados/interface/empleados.interface';
import { EmpleadosService } from '../services/empleados.service';
import { CargosService } from '../services/cargos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registroempleados',
  templateUrl: './registroempleados.component.html',
  styleUrls: ['./registroempleados.component.css']
})
export class RegistroempleadosComponent {

  constructor(private ServicioEmpleado: EmpleadosService, private ServicioCargos: CargosService) { }

  @Input() Empleados: Empleados = {
    Correo: '',
    Clave: '',
    Id: 0,
    Id_Cargo: 0,
    Disponible: 'SI'
  }
  
  mostrarMensaje: boolean = false;

  ngOnInit(): void {  
     

    this.CargarCargos();
 
     
   }
 

  Cargos: Cargos[] = []

  AgregarEmpleado() {


    if (this.Empleados.Correo.trim() == '' && this.Empleados.Clave.trim() == '') { 
      Swal.fire({
        title: 'Oops!',
        text: 'Error al Registrar Datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    
    
    console.log(this.Empleados.Id_Cargo);
    

    this.ServicioEmpleado.RegistrarEmpleado(this.Empleados)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire({
          text: `Mensaje ${resp}`,
          confirmButtonText: 'Aceptar'
        });
      });
      this.limpiarEmpleado();
      
      
      
      

  }

  CargarCargos() {

    this.ServicioCargos.ConsultarCargos().subscribe(

      (ListCargos: Cargos[] | null) => {

        if (ListCargos != null) {

          console.log('Resultado de la consulta de Cargos:', ListCargos);

          this.Cargos = ListCargos;
        }


      },
      (error: any) => {
        console.error('Error al consultar Cargos:', error);
      }
    );

    
  }
  
  limpiarEmpleado(){
    this.Empleados.Correo='';
    this.Empleados.Clave='';
    this.Empleados.Id_Cargo=0;
  }


}
