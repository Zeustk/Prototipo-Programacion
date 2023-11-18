import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {

  MostrarComponenteRVehiculo: boolean =false;
  MostrarComponenteRCliente: boolean= false;
  MostrarComponenteRCategorias:boolean=false;
  MostrarComponenteRTarifas:boolean=false;
  MostrarComponenteRAlquiler:boolean=false;
  MostrarComponenteIConsulta:boolean=false;
  MostrarComponenteREmpleado:boolean=false;

  CargarREmpleado():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=true;
  }

  CargarRVehiculo():void {
    this.MostrarComponenteRVehiculo=true;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
  }

  CargarRCliente():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= true;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
  }
  CargarRCategorias():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=true;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
  }
  CargarRTarifas():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;

  }

  CargarRAlquiler():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteREmpleado=false;

  }

  CargarIConsulta():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteIConsulta=true;
    this.MostrarComponenteREmpleado=false;

  }

}
