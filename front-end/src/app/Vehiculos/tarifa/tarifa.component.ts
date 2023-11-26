import { Component ,Input } from '@angular/core';
import { TarifaService } from './services/tarifa.service';
import { Tarifas } from '../Interfaces/vehiculos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent {

  constructor(private ServicioTarifa:TarifaService){}

  @Input() Tarifa:Tarifas = {
     Id:0,
     Nombre:'',
     Precio:0,
     ValorDia:0,
     Disponible:'SI'
     
  }

  ConsultarTarifas(){
    console.log(this.ServicioTarifa.Tarifa)
  }

  RegistrarTarifa(){

    this.ConsultarTarifas()
    console.log(this.Tarifa)

   if (this.Tarifa.Nombre.trim()=='' || this.Tarifa.Precio==0){
    Swal.fire({
      title: 'Oops!',
      text: 'Error al Registrar Datos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
    return;
   }
   

    this.ServicioTarifa.RegistrarTarifa(this.Tarifa)
    .subscribe(resp =>{
     console.log(resp);
     Swal.fire({
      text: `Mensaje ${resp}`,
      confirmButtonText: 'Aceptar'
    });
    });
    this.limpiartarifas();

   

}
  limpiartarifas(){
    this.Tarifa={
      Id:0,
     Nombre:'',
     Precio:0,
     ValorDia:0,
     Disponible:'SI'
    }
  }






}
