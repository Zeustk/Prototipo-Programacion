import { Component } from '@angular/core';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { Marcas, Tarifas, TipoVehiculo, Vehiculos } from 'src/app/Vehiculos/Interfaces/vehiculos.interface';

import { EmpleadosService} from  'src/app/Empleados/services/empleados.service'
import { MarcaService } from 'src/app/Vehiculos/marca/services/marca.service';
import { TipoVehiculoService } from 'src/app/Vehiculos/tipo-vehiculo/services/tipo-vehiculo.service';
import { TarifaService } from '../../Vehiculos/tarifa/services/tarifa.service';
import { RegistroService } from '../../Vehiculos/registro/services/registro.service';
import { Empleados } from '../../Vehiculos/Interfaces/empleados.interface';
import { ReservasService } from 'src/app/Reservas/services/reservas.service';
import { Reservas } from '../../Reservas/interface/reserva.interface';
import { AlquilerService } from 'src/app/Alquileres/services/alquiler.service';
import { Alquileres } from 'src/app/Alquileres/interface/alquiler.interface';

@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService,private ClienteService:ClienteService,private TarifaService:TarifaService,private RegistroServicio:RegistroService,private Empleado:EmpleadosService, private Reserva:ReservasService,private Alquiler:AlquilerService) { };

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
                 return;
      case 'TA':this.CargarTarifas();
                 return;
      case 'Gk' :this.CargarVehiculos();
                 return;
      case 'Gk' :this.CargarEmpleado();
                 return;
      case 'H' :this.CargarResevas();
                 return;
      case 'GG' :this.CargarAlquiler();
                 return;
      
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

          console.log('Resultado de la consulta de TipoVehiculo:', ListTipoVehiculo);
         
          this.InfoTabla=ListTipoVehiculo;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarVehiculos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.RegistroServicio.ConsultarVehiculo().subscribe(
      (listVehiculo: Vehiculos[] | null) => {

        if (listVehiculo != null) {

          console.log('Resultado de la consulta de Vehiculo:', listVehiculo);
         
          this.InfoTabla=listVehiculo;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarTarifas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.TarifaService.ConsultarTarifas().subscribe(
      (ListTarifa: Tarifas[] | null) => {

        if (ListTarifa != null) {

          console.log('Resultado de la consulta de Tarifa:', ListTarifa);
         
          this.InfoTabla=ListTarifa;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }
  
  CargarEmpleado() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.Empleado.ConsultarEmpleados().subscribe(
      (ListEmpleado: Empleados[] | null) => {

        if (ListEmpleado != null) {

          console.log('Resultado de la consulta de Empleados:', ListEmpleado);
         
          this.InfoTabla=ListEmpleado;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarResevas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V
       
    this.Reserva.ConsultarReservas().subscribe(
      (ListReserva: Reservas[] | null) => {

        if (ListReserva != null) {

          console.log('Resultado de la consulta de reservas:', ListReserva);
         
          this.InfoTabla=ListReserva;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarAlquiler() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V
       
    this.Alquiler.ConsultarAlquileres().subscribe(
      (ListAlquiler: Alquileres[] | null) => {

        if (ListAlquiler != null) {

          console.log('Resultado de la consulta de alquileres:', ListAlquiler);
         
          this.InfoTabla=ListAlquiler;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

 

}