import { Component, Input } from '@angular/core';
import { Clientes } from '../interface/clientes.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  

  @Input() Clientes:Clientes = {
    Nombre_Completo: '',
    Cc: '',
    Fecha_Nacimiento: new Date(),
    N_Licencia: '',
    Disponible: '',
    Correo:'',
    Contrasena: '',
    Telefono:''
  }
   
  BuscarCliente(){
    
    if(this.Clientes.Correo.trim()=='' || this.Clientes.Contrasena.trim()==''){
      Swal.fire({
        title: 'Oops!',
        text: 'Error al Registrar Datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
    
    return
  } 

  BorrarDatoCliente(){
    this.Clientes.Contrasena='';
    this.Clientes.Correo='';
    
  }
  

}
