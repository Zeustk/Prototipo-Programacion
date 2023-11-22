import { Component , Input} from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Clientes } from '../interface/clientes.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private clienteService:ClienteService){}
  
  @Input() Clientes:Clientes = {
    Nombre_Completo: '',
    Cc: '',
    Fecha_Nacimiento: new Date(),
    N_Licencia: '',
    Disponible: '',
    Correo: '',
    Contrasena: '',
    Telefono:''
  }
  
  ngOnInit(): void {  
    
  
   }

  ConsultarCliente(){
    console.log(this.clienteService.Clientes)
  }

  AgregarCliente(){

   

   if (this.Clientes.Cc=='' && this.Clientes.Contrasena==''){
    Swal.fire({
      title: 'Oops!',
      text: 'Error al Registrar Datos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;

    
   }
  
   
    this.clienteService.RegistrarCliente(this.Clientes)
    .subscribe(resp =>{
     console.log(resp);
     

    });

    this.Borrarlabels();

  }

  Borrarlabels() {
    this.Clientes = {
    Nombre_Completo: '',
    Cc: '',
    Fecha_Nacimiento: new Date(),
    N_Licencia: '',
    Disponible: '',
    Correo: '',
    Contrasena: '',
    Telefono:''
    
    };
  }

}
