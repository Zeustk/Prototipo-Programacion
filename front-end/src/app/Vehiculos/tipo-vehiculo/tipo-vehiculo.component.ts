import { Component,Input } from '@angular/core';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';
import { Marcas, TipoVehiculo } from '../Interfaces/vehiculos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-vehiculo',
  templateUrl: './tipo-vehiculo.component.html',
  styleUrls: ['./tipo-vehiculo.component.css']
})
export class TipoVehiculoComponent {

  constructor(private ServicioTipoVehiculo:TipoVehiculoService){}

  @Input() TipoVehiculos:TipoVehiculo = {
    Id: 0,
    Nombre: '',
    Disponible: 'SI'
  }

  
    
  ConsultarTipoVehiculo(){
    console.log(this.ServicioTipoVehiculo.TipoVehiculo)
  }

  RegistrarTipoVehiculo(){

    this.ConsultarTipoVehiculo()
    console.log(this.TipoVehiculos)

   if (this.TipoVehiculos.Nombre.trim()=='' && this.TipoVehiculos.Id==0){
    Swal.fire({
      title: 'Oops!',
      text: 'Error al Registrar Datos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;

    
   }
   
 

    this.ServicioTipoVehiculo.RegistrarTipoVehiculo(this.TipoVehiculos)
    .subscribe(resp =>{
     console.log(resp);
     Swal.fire('Msj',resp);
    });

    this.borradatos();

    
 } 

 borradatos(){
   this.TipoVehiculos.Nombre='';
 }

 



}
