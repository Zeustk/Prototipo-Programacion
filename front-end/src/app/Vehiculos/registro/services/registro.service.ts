import { Injectable } from '@angular/core';
import { Vehiculos } from '../../Interfaces/vehiculos.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';


@Injectable()
export class RegistroService extends CrudService<Vehiculos> {  //VEHICULOS

  private _vehiculo!:Vehiculos;

  get Vehiculo(): Vehiculos {
    return { ...this._vehiculo }; //Para seguridad, no se acceda facilmente
  }


  RegistrarVehiculo(vehiculoRecibido: Vehiculos) {


    this._vehiculo = vehiculoRecibido;

    const body = {

      Placa: vehiculoRecibido.Placa,
      Disponible: 'SI',
      Id_TipoVehiculo: vehiculoRecibido.Id_TipoVehiculo,
      Modelo: vehiculoRecibido.Modelo,
      Id_Marca: vehiculoRecibido.Id_Marca,
      Id_Tarifa: vehiculoRecibido.Id_Tarifa,

    };

    return this.Agregar(body,'AddVehiculo')
  }

  ConsultarVehiculo(){
    return this.Consultar('getVehiculo');
  }

}