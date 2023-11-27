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

   async AgregarCliente(){

  

   if (this.Clientes.Cc.trim()=='' || this.Clientes.Contrasena.trim()=='' || this.Clientes.Cc.trim()=='' || this.Clientes.Telefono.trim()=='' || this.Clientes.N_Licencia.trim()==''){
    Swal.fire({
      title: 'Oops!',
      text: 'Error al Registrar Datos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;

    

   }

   const clienteExistente = await this.clienteService.BuscarCliente(this.Clientes).toPromise();

   if (clienteExistente) {
    Swal.fire('Msj', 'CLIENTE YA REGISTRADO');
  } else {
    const respuestaRegistro = await this.clienteService.RegistrarCliente(this.Clientes).toPromise();
    Swal.fire('Msj', respuestaRegistro);
  }
   
  

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
