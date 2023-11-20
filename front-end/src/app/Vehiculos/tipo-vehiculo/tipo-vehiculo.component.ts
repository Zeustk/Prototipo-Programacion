import { Component,Input } from '@angular/core';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';
import { TipoVehiculo } from '../Interfaces/vehiculos.interface';

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
    Disponible: ''
  }

  ConsultarTipoVehiculo(){
    console.log(this.ServicioTipoVehiculo.TipoVehiculo)
  }

  RegistrarTipoVehiculo(){

    this.ConsultarTipoVehiculo()
    console.log(this.TipoVehiculos)

   if (this.TipoVehiculos.Nombre=='' && this.TipoVehiculos.Id==0){
    return;

    
   }
   

    this.ServicioTipoVehiculo.RegistrarTipoVehiculo(this.TipoVehiculos)
    .subscribe(resp =>{
     console.log(resp);
    });
} 

}
