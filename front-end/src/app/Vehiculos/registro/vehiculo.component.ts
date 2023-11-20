import { Component, Input } from '@angular/core';
import { Marcas, TipoVehiculo, Vehiculos } from '../Interfaces/vehiculos.interface';
import { MarcaService } from '../marca/services/marca.service';
import { TipoVehiculoService } from '../tipo-vehiculo/services/tipo-vehiculo.service';
import { RegistroService } from './services/registro.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {

  constructor(private marcaService: MarcaService, private TipoVehiculoService: TipoVehiculoService, private VehiculoService: RegistroService) { };

  @Input() Vehiculo: Vehiculos = {
    Placa: '',
    Id_TipoVehiculo:0,
    Modelo: 0,
    Id_Marca: 0,
    Id_Tarifa: 0,
    Disponible: 'SI'

  }

  Marcas: Marcas[] = [];
  TipoVehiculos: TipoVehiculo[] = [];


  ngOnInit(): void {  //NGONInit PERMITE QUE SE CARGUEN LOS DATOS ANTES DE QUE CARGUEN LAS VISRTAS
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


  AgregarVehiculo() {


    this.VehiculoService.RegistrarVehiculo(this.Vehiculo)
      .subscribe(resp => {
        console.log(resp);
      });



  }

}
