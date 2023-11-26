import { Component, Input } from '@angular/core';
import { Marcas, Tarifas, TipoVehiculo, Vehiculos } from '../Interfaces/vehiculos.interface';
import { MarcaService } from '../marca/services/marca.service';
import { TipoVehiculoService } from '../tipo-vehiculo/services/tipo-vehiculo.service';
import { RegistroService } from './services/registro.service';
import { TarifaService } from '../tarifa/services/tarifa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService, private VehiculoService: RegistroService, private TarifaService: TarifaService) { };

  @Input() Vehiculo: Vehiculos = {
    Placa: '',
    Id_Tipovehiculo: 0,
    Modelo: '',
    Id_Marca: 0,
    Id_Tarifas: 0,
    Disponible: 'SI',
    Year: '1992',
    Url:'assets/car-rent-10.png'

  }


  handleImageUpload(event: any): void {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.Vehiculo.Url = e.target.result;
      };
  
      reader.readAsDataURL(file);
    } else {
      // Usuario eliminó la imagen actual
      this.Vehiculo.Url = 'assets/car-rent-10.png'; // Reemplaza con la ruta correcta
    }
  }
  
  Marcas: Marcas[] = [];
  TipoVehiculos: TipoVehiculo[] = [];
  Tarifas: Tarifas[] = [];


  ngOnInit(): void {

    this.CargarMarcas();
    this.CargarTipoVehiculo();
    this.CargarTarifas();


  }

  //Cargar
  CargarTarifas() {

    this.TarifaService.ConsultarTarifas().subscribe(

      (ListTarifas: Tarifas[] | null) => {

        if (ListTarifas != null) {

          console.log('Resultado de la consulta de Tarifas:', ListTarifas);

          this.Tarifas = ListTarifas;
        }


      },
      (error: any) => {
        console.error('Error al consultar Vehiculos:', error);
      }
    );
  }

  CargarMarcas() {

    this.marcaService.ConsultarMarcas().subscribe(
      (ListMarcas: Marcas[] | null) => {

        if (ListMarcas != null) {

          console.log('Resultado de la consulta de marcas:', ListMarcas);
          this.Marcas = ListMarcas;
        }

      },
      (error: any) => {
        console.error('Error al consultar marcas:', error);
      }
    );
  }

  CargarTipoVehiculo() {

    this.TipoVehiculoService.ConsultarTipoVehiculo().subscribe(

      (ListTipoVehiculos: TipoVehiculo[] | null) => {

        if (ListTipoVehiculos != null) {

          console.log('Resultado de la consulta de Tipo de vehiculos:', ListTipoVehiculos);

          this.TipoVehiculos = ListTipoVehiculos;
        }


      },
      (error: any) => {
        console.error('Error al consultar TipoVehiculo:', error);
      }
    );
  }

  
  //agregar

  AgregarVehiculo() {

    if (this.Vehiculo.Placa == '' ||
      this.Vehiculo.Modelo == '' ||
      this.Vehiculo.Id_Marca <= 0 ||
      this.Vehiculo.Id_Tipovehiculo <= 0 ||
      this.Vehiculo.Id_Tarifas <= 0
    ) 
    {

      Swal.fire({
        title: 'Oops!',
        text: 'Error al Registrar Datos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;


    }

    console.log(this.Vehiculo.Url);

    this.VehiculoService.RegistrarVehiculo(this.Vehiculo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire({
          text: `Mensaje ${resp}`,
          confirmButtonText: 'Aceptar'
        });
      });

    this.reiniciarDatos();



  }

  reiniciarDatos() {
    this.Vehiculo = {
      Placa: '',
      Id_Tipovehiculo: 0,
      Modelo: '',
      Id_Marca: 0,
      Id_Tarifas: 0,
      Disponible: 'SI',
      Year: '1992',
      Url:'assets/car-rent-10.png'
    }

  }



  //CONVERSIONES



}
