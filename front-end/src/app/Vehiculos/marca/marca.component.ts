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
    Id_Marca:0,
    Nombre:'',
    Disponible:'SI'
     
  }

  ConsultarMarcas(){
    console.log(this.marcaService.Marcas)
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

  borrarMarca(){
    this.Marca={
     Id_Marca:0,
     Nombre:'',
     Disponible:'SI'
    }
  }
}
