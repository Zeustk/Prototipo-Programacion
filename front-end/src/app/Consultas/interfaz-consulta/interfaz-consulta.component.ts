import { ChangeDetectorRef, Component, ErrorHandler } from '@angular/core';
import { ClienteService } from 'src/app/Cliente/services/cliente.service';
import { Marcas, Tarifas, TipoVehiculo, Vehiculos } from 'src/app/Vehiculos/Interfaces/vehiculos.interface';

import { EmpleadosService } from 'src/app/Empleados/services/empleados.service'
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
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService, private ClienteService: ClienteService, private TarifaService: TarifaService, private VehiculoServicio: RegistroService, private Empleado: EmpleadosService, private Reserva: ReservasService, private Alquiler: AlquilerService, private CargoService: CargosService, private datePipe: DatePipe, private cdr: ChangeDetectorRef) { };

  //DATOS GLOBALES

  mostrarTabla: boolean = false;
  mostrarBoton: boolean = false;
  VehiculosEstaCargado: boolean = false;
  MarcaEstaCargado: boolean = false;
  TipoVehiculoEstaCargado: boolean = false;
  TarifasEstaCargado: boolean = false;
  EmpleadosEstaCargado: boolean = false;
  AlquilerEstaCargado: boolean = false;
  ClienteEstaCargado: boolean = false;
  CargosEstaCargado: boolean = false;


  InfoTabla: any[] = [];


  ColumnasOrden: string[] = []
  columnasFecha: string[] = [] //SIRVE PARA DECIR QUE COLUMNAS SON DE FECHA PARA EL FORMATO
  FilaSeleccionada: any | null = null; //Para saber que fila se selecciono


  FilaEditada: any = {};


  seleccionarFila(InfoDB: any) {
    if (this.FilaSeleccionada === InfoDB) {
      this.FilaSeleccionada = null; // Desmarca la fila
    } else {
      this.FilaSeleccionada = InfoDB; // Marca la fila
      console.log(this.FilaSeleccionada);
    }
  }





  mostrarTablaConsulta(boton: string) {

    this.mostrarTabla = true;
    this.mostrarBoton = true;

    switch (boton) {
      case 'M': this.CargarMarcas();
        return;
      case 'T': this.CargarTipoVehiculo();
        return;
      case 'TA': this.CargarTarifas();
        return;
      case 'GK': this.CargarVehiculos();
        return;
      case 'EM': this.CargarEmpleado();
        return;
      case 'DD': this.CargarResevas();
        return;
      case 'GG': this.CargarAlquiler();
        return;
      case 'C': this.CargarCliente();
        return;
      case 'CA': this.CargarCargos();
        return;

    }

  }


  //FORMATO DE FECHA

  formatearValor(valor: any, nombreColumna: string): string {
    // Verificar si el valor es nulo o indefinido
    if (valor == null) {
      return ''; // O el valor predeterminado que desees para valores nulos
    }

    if (this.columnasFecha.includes(nombreColumna)) {
      // Si la columna es una fecha, aplica el formato
      return this.formatearFecha(valor);
    } else {
      // Para otras columnas, simplemente devuelve el valor como cadena
      return valor;
    }
  }

  private formatearFecha(fecha: any): string {
    const fechaDate = new Date(fecha);

    // Verificar si es una fecha válida
    if (!isNaN(fechaDate.getTime())) {
      // Aplicar el formato de fecha deseado
      return this.datePipe.transform(fechaDate, 'yyyy-MM-dd') || '';
    }

    // Si no es una fecha válida, devolver una cadena vacía
    return '';
  }


  //CONSULTAS


  CargarMarcas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS

    this.marcaService.ConsultarMarcas().subscribe(
      (ListMarcas: Marcas[] | null) => {

        if (ListMarcas != null) {

          console.log('Resultado de la consulta de marcas:', ListMarcas);

          this.InfoTabla = ListMarcas;
          this.MarcaEstaCargado = true;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
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



          this.InfoTabla = ListTipoVehiculo;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = true;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;

          //Se colocan las Columnas en que la fecha se quiere formatear
          this.columnasFecha = ['Fecha_Emision', 'Fecha_Recepcion', 'Fecha_Contrato']

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id',
            'Nombre',
            'Disponible'
          ]



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

          this.InfoTabla = listVehiculo;
          this.VehiculosEstaCargado = true;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id_TipoVehiculo',
            'Modelo',
            'Id_Marca',
            'Id_Tarifas',
            'Placa',
            'Year',
            'Disponible',
          

          ]



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

          this.InfoTabla = ListTarifa;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = true;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
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

          this.InfoTabla = ListEmpleado;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = true;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
        }

      },
      (error: any) => {
        console.error('Error al consultar Empleados:', error);
      }
    );

  }

  CargarResevas() {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS V

    this.Reserva.ConsultarReservas().subscribe(
      (ListReserva: Reservas[] | null) => {

        if (ListReserva != null) {

          console.log('Resultado de la consulta de reservas:', ListReserva);

          this.InfoTabla = ListReserva;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;
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


          //Cargar Datos y saber si Alquiler es el que está cargado
          this.InfoTabla = ListAlquiler;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado = true;
          this.ClienteEstaCargado = false;
          this.CargosEstaCargado = false;

          //Se colocan las Columnas en que la fecha se quiere formatear
          this.columnasFecha = ['Fecha_Emision', 'Fecha_Recepcion', 'Fecha_Contrato']

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Id',
            'Placa_Vehiculo',
            'Cc_Clientes',
            'Id_Empleados',
            'Fecha_Emision',
            'Fecha_Contrato',
            'Fecha_Recepcion',
            'KmEmision',
            'KmRecepcion',
            'KmRecorridos',
            'Valor_Inicial',
            'Cargos_Adicionales',
            'Total',
            'Disponible'
          ]


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

          this.InfoTabla = ListCliente;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.ClienteEstaCargado = true;
          this.CargosEstaCargado = false;

          this.columnasFecha = ['Fecha_Nacimiento'];

          //ORDEN DE LAS COLUMNAS
          this.ColumnasOrden = [

            'Cc',
            'Fecha_Nacimiento',
            'Nombre_Completo',
            'Numero_Licencia',
            'Telefono',
            'Correo',
            'Contrasena',
            'Disponible'


          ]



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

          this.InfoTabla = ListCargos;
          this.MarcaEstaCargado = false;
          this.TipoVehiculoEstaCargado = false;
          this.VehiculosEstaCargado = false;
          this.TarifasEstaCargado = false;
          this.EmpleadosEstaCargado = false;
          this.AlquilerEstaCargado == false;
          this.CargosEstaCargado = true;
        }

      },
      (error: any) => {
        console.error('Error al consultar Cargos:', error);
      }
    );

  }


  //ACTUALIZAR

  AlmacenarFila(event: any, InfoDB: any, propiedadKey: string | undefined) {
    if (propiedadKey !== undefined) {
      this.FilaEditada = { ...InfoDB, [propiedadKey]: event.target.innerText };
    }
  }


  ActualizarDatos() {


    if (this.FilaEditada && Object.keys(this.FilaEditada).length > 0) {



      if (this.VehiculosEstaCargado) {
        this.ActualizarVehiculo();
      }

      if (this.TipoVehiculoEstaCargado) {
        this.ActualizarTipovehiculo();
      }


      if (this.AlquilerEstaCargado) {
        this.ActualizarAlquiler();
      }

      if (this.MarcaEstaCargado) {
        this.ActualizarMarca();
      }

      if (this.CargosEstaCargado) {
        this.ActualizarCargos();
      }

      if (this.TarifasEstaCargado) {
        this.ActualizarTarifa();
      }

      if (this.EmpleadosEstaCargado) {
        this.ActualizarEmpleado();
      }

      if (this.ClienteEstaCargado) {
        this.ActualizarClientes();
      }


      this.FilaEditada = {};

    }
    else {

      Swal.fire('Error', 'POR FAVOR ACTUALICE UN VALOR E INTENTE DENUEVO', 'error');

    }
  }

  ActualizarVehiculo() {

    const Vehiculo: Vehiculos = this.FilaEditada;



    this.VehiculoServicio.ActualizarVehiculo(Vehiculo)
      .subscribe(resp => {
        console.log(resp);

      });


  }

  //Actualizaciones

  ActualizarAlquiler() {

    const Alquiler: Alquileres = this.FilaEditada;

    console.log(Alquiler);



    if (Alquiler.KmRecepcion != null) {

      const KMEmision: number = Alquiler.KmEmision;
      const KmRecepcion: number = Alquiler.KmRecepcion;

      if (KmRecepcion <= KMEmision) {
        Swal.fire('ERROR DE KILOMETROS', 'LOS KILOMETROS DE RECEPCION DEBEN SER MAYORES A LOS KILOMETROS DE EMISION', 'error');
        return;
      }
    }

    if (Alquiler.Fecha_Recepcion != null) {

      const FechaEmision: Date = new Date(Alquiler.Fecha_Emision);
      const FechaRecepcion: Date = new Date(Alquiler.Fecha_Recepcion);

      if (FechaRecepcion < FechaEmision) {
        Swal.fire('ERROR DE FECHA', 'LA FECHA DE RECEPCION DEBEN SER MAYOR O IGUAL A LA FECHA DE EMISION', 'error');
        return;
      }
    }


    this.Alquiler.ActualizarAlquilar(Alquiler)
      .subscribe(resp => {
        console.log(resp);
        this.CargarAlquiler();
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarMarca() {
    const Marcas: Marcas = this.FilaEditada;

    this.marcaService.ActualizarMarca(Marcas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarTipovehiculo() {
    const TipoVehiculo: TipoVehiculo = this.FilaEditada;

    this.TipoVehiculoService.ActualizarTipoVehiculo(TipoVehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarTarifa() {
    const Tarifas: Tarifas = this.FilaEditada;

    this.TarifaService.ActualizarTarifa(Tarifas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarEmpleado() {
    const Empleados: Empleados = this.FilaEditada;

    this.Empleado.ActualizarEmpleado(Empleados)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarReservas() {
    const Reservas: Reservas = this.FilaEditada;

    this.Reserva.ActualizarReserva(Reservas)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }

  ActualizarClientes() {
    const Clientes: Clientes = this.FilaEditada;

    this.ClienteService.ActualizarCliente(Clientes)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }


  ActualizarCargos() {
    const Cargos: Cargos = this.FilaEditada;

    this.CargoService.ActualizarCargos(Cargos)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });
  }


  //ELIMINAR


  EliminarDatos() {

    if (this.FilaSeleccionada != null) {

      if (this.TipoVehiculoEstaCargado) {
        this.EliminarTipoVehiculo();

      }

      if (this.MarcaEstaCargado){

      }
    }


  }


  EliminarTipoVehiculo() {

    const TipoVehiculo: TipoVehiculo = this.FilaSeleccionada;

    this.TipoVehiculoService.EliminarTipoVehiculo(TipoVehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('RESPUESTA', resp);
      });

  }




  //DATOS GlOBALES

  ColumnasNombres: { [key: string]: string } = {
    //Mapear los nombres de las cabeceras


    //ALQUILER
    Fecha_Emision: 'Fecha De Emision',
    Fecha_Contrato: 'Fecha De Finalizacion',
    Id: 'Id',
    KmEmision: 'Kilometros De Emision',
    KmRecepcion: 'Kilometros De Recepcion',
    KmRecorridos: 'Kilometros Recorridos',
    Cargos_Adicionales: 'Cargos Adicionales',
    Total: 'Total',
    Placa_Vehiculo: 'Placa De Vehiculo',
    Cc_Clientes: 'Cedula',
    Id_Empleados: 'Id Empleado',
    Valor_Inicial: 'Valor Base',
    Disponible: 'Disponible',
    Fecha_Recepcion: 'Fecha De Recepcion',
    //Clientes

    Cc: 'Cedula',
    Fecha_Nacimiento: 'Fecha De Nacimiento',
    Nombre_Completo: 'Nombre Completo',
    Numero_Licencia: 'Numero De Licencia',
    Telefono: 'Telefono',
    Correo: 'Correo',
    Contrasena: 'Contraseña',

    //Tipo-Vehiuclo
    Nombre: 'Nombre',
   

    //VEHICULOS

    Placa: 'Placa',
    Id_TipoVehiculo: 'Tipo De Vehiculo',
    Modelo: 'Modelo',
    Id_Marca: 'Marca',
    Id_Tarifas: 'Tarifa',
    Year:'Año'



  }; //Con esto se pueden mapear  los nombres para que aparezcan de la manera deseada

}