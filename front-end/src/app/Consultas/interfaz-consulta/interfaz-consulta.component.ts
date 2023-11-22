import { Component } from '@angular/core';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { Marcas, Tarifas, TipoVehiculo, Vehiculos } from 'src/app/Vehiculos/Interfaces/vehiculos.interface';

import { EmpleadosService} from  'src/app/Empleados/services/empleados.service'
import { MarcaService } from 'src/app/Vehiculos/marca/services/marca.service';
import { TipoVehiculoService } from 'src/app/Vehiculos/tipo-vehiculo/services/tipo-vehiculo.service';
import { TarifaService } from '../../Vehiculos/tarifa/services/tarifa.service';
import { RegistroService } from '../../Vehiculos/registro/services/registro.service';
import { Cargos, Empleados } from '../../Empleados/interface/empleados.interface';
import { ReservasService } from 'src/app/Reservas/services/reservas.service';
import { Reservas } from '../../Reservas/interface/reserva.interface';
import { AlquilerService } from 'src/app/Alquileres/services/alquiler.service';
import { Alquileres } from 'src/app/Alquileres/interface/alquiler.interface';
import { Clientes } from 'src/app/Cliente/interface/clientes.interface';
import { CargosService } from 'src/app/Empleados/services/cargos.service';

@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService,private ClienteService:ClienteService,private TarifaService:TarifaService,private VehiculoServicio:RegistroService,private Empleado:EmpleadosService, private Reserva:ReservasService,private Alquiler:AlquilerService,private CargoService:CargosService) { };

   mostrarTabla: boolean = false;
   mostrarBoton: boolean = false;
  VehiculosEstaCargado:boolean=false;
   MarcaEstaCargado:boolean=false;
   TipoVehiculoEstaCargado:boolean=false;
  TarifasEstaCargado:boolean=false;
   EmpleadosEstaCargado:boolean=false;
   AlquilerEstaCargado:boolean=false;
  ClienteEstaCargado:boolean=false;
   CargosEstaCargado:boolean=false;

  FilaEditada:any={};

  

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
      case 'GK' :this.CargarVehiculos();
                 return;
      case  'EM' :this.CargarEmpleado();
                 return;
      case 'DD' :this.CargarResevas();
                 return;
      case 'GG' :this.CargarAlquiler();
                 return;
      case 'C' :this.CargarCliente();
                 return;
      case 'CA':this.CargarCargos();
                return;
      
    } 

  }


  CargarMarcas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.marcaService.ConsultarMarcas().subscribe(
      (ListMarcas: Marcas[] | null) => {

        if (ListMarcas != null) {

          console.log('Resultado de la consulta de marcas:', ListMarcas);
         
          this.InfoTabla=ListMarcas;
          this.MarcaEstaCargado=true;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
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
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=true;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarVehiculos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.VehiculoServicio.ConsultarVehiculo().subscribe(
      (listVehiculo: Vehiculos[] | null) => {

        if (listVehiculo != null) {

          console.log('Resultado de la consulta de Vehiculo:', listVehiculo);
         
          this.InfoTabla=listVehiculo;
          this.VehiculosEstaCargado=true;
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
     
        }
        
      },
      (error: any) => {
        console.error('Error al consultar Vehiculos:', error);
      }
    );

  }

  CargarTarifas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.TarifaService.ConsultarTarifas().subscribe(
      (ListTarifa: Tarifas[] | null) => {

        if (ListTarifa != null) {

          console.log('Resultado de la consulta de Tarifa:', ListTarifa);
         
          this.InfoTabla=ListTarifa;
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=true;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
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
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=true;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
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
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
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
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado=true;
          this.ClienteEstaCargado=false;
          this.CargosEstaCargado=false;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarCliente() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V
       
    this.ClienteService.ConsultarCliente().subscribe(
      (ListCliente: Clientes[] | null) => {

        if (ListCliente != null) {

          console.log('Resultado de la consulta de alquileres:', ListCliente);
         
          this.InfoTabla=ListCliente;
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.ClienteEstaCargado=true;
          this.CargosEstaCargado=false;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );

  }

  CargarCargos() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V
       
    this.CargoService.ConsultarCargos().subscribe(
      (ListCargos: Cargos[] | null) => {

        if (ListCargos != null) {

          console.log('Resultado de la consulta de Cargos:', ListCargos);
         
          this.InfoTabla=ListCargos;
          this.MarcaEstaCargado=false;
          this.TipoVehiculoEstaCargado=false;
          this.VehiculosEstaCargado=false;
          this.TarifasEstaCargado=false;
          this.EmpleadosEstaCargado=false;
          this.AlquilerEstaCargado==false;
          this.CargosEstaCargado=true;
        }
        
      },
      (error: any) => {
        console.error('Error al consultar Cargos:', error);
      }
    );

  }



  AlmacenarFila(event: any, InfoDB: any, propiedadKey: string | undefined) {
    if (propiedadKey !== undefined) {
      this.FilaEditada = { ...InfoDB, [propiedadKey]: event.target.innerText };
    }
  }
  

  ActualizarDatos(){


    if (this.FilaEditada && Object.keys(this.FilaEditada).length > 0){
      
     

      if (this.VehiculosEstaCargado){ //PAGINA
        this.ActualizarVehiculo();
      }

      console.log(this.AlquilerEstaCargado);

      if (this.AlquilerEstaCargado){
        console.log('hola');
        this.ActualizarAlquiler();
      }

      if (this.MarcaEstaCargado){
        this.ActualizarMarca();
      }

      this.FilaEditada={};

    }
  }

  ActualizarVehiculo(){

    const Vehiculo: Vehiculos=this.FilaEditada;


    this.VehiculoServicio.ActualizarVehiculo(Vehiculo)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  ActualizarAlquiler(){

    const Alquiler:Alquileres=this.FilaEditada; 

    this.Alquiler.ActualizarAlquilar(Alquiler)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  ActualizarMarca(){
    const Alquiler:Alquileres=this.FilaEditada; 

    this.Alquiler.ActualizarAlquilar(Alquiler)
    .subscribe(resp => {
      console.log(resp);
    });
  }
 

}