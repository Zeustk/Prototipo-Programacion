import { Component } from '@angular/core';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { Marcas, TipoVehiculo, Vehiculos } from 'src/app/Vehiculos/Interfaces/vehiculos.interface';
import { MarcaService } from 'src/app/Vehiculos/marca/services/marca.service';
import { TarifaService } from 'src/app/Vehiculos/tarifa/services/tarifa.service';
import { TipoVehiculoService } from 'src/app/Vehiculos/tipo-vehiculo/services/tipo-vehiculo.service';

@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService,private ClienteService:ClienteService,private TarifaService:TarifaService) { };

  mostrarTabla = false;
  mostrarBoton = false;

  InfoTabla:any[]=[];


  mostrarTablaConsulta(boton:string) {

    this.mostrarTabla = true;
    this.mostrarBoton = true;
    
    switch(boton){
      case 'M': this.CargarMarcas();   //MARCA: M, TIPO DE VEHICULO:T
                  return;
      case 'T':this.CargarTipoVehiculo();
      
    } 

  }


  CargarMarcas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.marcaService.ConsultarMarcas().subscribe(
      (ListMarcas: Marcas[] | null) => {

        if (ListMarcas != null) {

          console.log('Resultado de la consulta de marcas:', ListMarcas);
         
          this.InfoTabla=ListMarcas;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarTipoVehiculo() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.TipoVehiculoService.ConsultarTipoVehiculo().subscribe(
      (ListTipoVehiculo: TipoVehiculo[] | null) => {

        if (ListTipoVehiculo != null) {

          console.log('Resultado de la consulta de marcas:', ListTipoVehiculo);
         
          this.InfoTabla=ListTipoVehiculo;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

 

}
