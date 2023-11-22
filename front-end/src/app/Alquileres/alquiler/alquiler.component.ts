import { Component, Input } from '@angular/core';
import { Vehiculos } from '../../Vehiculos/Interfaces/vehiculos.interface';
import { RegistroService } from '../../Vehiculos/registro/services/registro.service';
import { Alquileres } from '../interface/alquiler.interface';
import { Clientes } from '../../Cliente/interface/clientes.interface';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { AlquilerService } from '../services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  constructor(private AlquieresVehiculo:RegistroService, private Clientecedula:ClienteService,private AlquilerServicio:AlquilerService){}
   

  @Input() Alquiler: Alquileres = {
    Fecha_Emision:new Date(),
    Fecha_Recepcion:null,
    Id: 0,
    KmEmision:0 ,
    KmRecepcion:null,
    KmRecorridos:null,
    Cargos_Adicionales:null,
    Placa_Vehiculo: '',
    Cc_Clientes: '',
    Id_Empleados:0,
    Total:null,
    Valor_Inicial: 0,
    Disponible: 'SI'
  }
  Vehiculos: Vehiculos[] = [];
  Clientes: Clientes[]=[];

  ngOnInit(): void {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
  
     this.CargarVehiculo();
     this.CargarCliente();
     
   }

   RegistrarAlquiler(){
    
    if (this.Alquiler.KmEmision==0 || this.Alquiler.Id_Empleados==0){
      Swal.fire({
        title: 'Oops!',
        text: 'Error al Registrar Datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
     }
    
   
    this.AlquilerServicio.RegistrarAlquiler(this.Alquiler)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire({
          text: `Mensaje ${resp}`,
          confirmButtonText: 'Aceptar'
        });
      });
      this.limpiarAlquiler()
   }

  CargarVehiculo(){

    this.AlquieresVehiculo.ConsultarVehiculo().subscribe(
      (listVehiculo:Vehiculos[] | null) => {

        if (listVehiculo != null) {

          console.log('Resultado de la consulta de placas:', listVehiculo);
          this.Vehiculos = listVehiculo;
        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );
  }

  CargarCliente(){

    this.Clientecedula.ConsultarCliente().subscribe(
      (listCedula:Clientes[] | null) => {

        if (listCedula != null) {

          console.log('Resultado de la consulta de Cedulas:', listCedula);
          this.Clientes = listCedula;
        }

      },
      (error: any) => {
        console.error('Error al consultar Cedulas:', error);
      }
    );
  }

  limpiarAlquiler(){
    this.Alquiler.Cc_Clientes='';
    this.Alquiler.Placa_Vehiculo='';
  }
}
