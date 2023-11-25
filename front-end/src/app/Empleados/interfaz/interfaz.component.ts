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
  MostrarComponenteRCargo:boolean=false;

  CargarREmpleado():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=true;
    this.MostrarComponenteRCargo=false;
  }

  CargarRVehiculo():void {
    this.MostrarComponenteRVehiculo=true;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }

  CargarRCliente():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= true;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }
  CargarRCategorias():void {
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=true;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;
  }
  CargarRTarifas():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarRAlquiler():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=true;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarIConsulta():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteIConsulta=true;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=false;

  }

  CargarRCargo():void{
    this.MostrarComponenteRVehiculo=false;
    this.MostrarComponenteRCliente= false;
    this.MostrarComponenteRCategorias=false;
    this.MostrarComponenteRTarifas=false;
    this.MostrarComponenteRAlquiler=false;
    this.MostrarComponenteIConsulta=false;
    this.MostrarComponenteREmpleado=false;
    this.MostrarComponenteRCargo=true;
  }

}
