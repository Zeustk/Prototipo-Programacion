import { Component, Input } from '@angular/core';
import { MarcaService } from './services/marca.service';
import { Marcas } from '../Interfaces/vehiculos.interface';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent {

  constructor(private marcaService:MarcaService){}

  @Input() Marca:Marcas = {
     Nombre:'',
     Disponible:'SI'
     
  }


  AgregarMarca(){

   if (this.Marca.Nombre==''){
    return;
   }
   

    this.marcaService.RegistrarMarca(this.Marca)
    .subscribe(resp =>{
     console.log(resp);
    });

  }
}
