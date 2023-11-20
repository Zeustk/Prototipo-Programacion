import { Component ,Input } from '@angular/core';
import { TarifaService } from './services/tarifa.service';
import { Tarifas } from '../Interfaces/vehiculos.interface';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent {

  constructor(private ServicioTarifa:TarifaService){}

  @Input() Tarifas:Tarifas = {
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
    console.log(this.Tarifas)

   if (this.Tarifas.Nombre=='' && this.Tarifas.Precio==0){
    return;

    
   }
   

    this.ServicioTarifa.RegistrarTarifa(this.Tarifas)
    .subscribe(resp =>{
     console.log(resp);
    });

}

}
