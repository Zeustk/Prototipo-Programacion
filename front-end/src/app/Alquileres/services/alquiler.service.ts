import { Injectable } from '@angular/core';
import { Alquileres } from '../interface/alquiler.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class AlquilerService extends CrudService<Alquileres>{

  private _Alquiler!:Alquileres;

  get Alquiler(): Alquileres {
    return { ...this._Alquiler }; //Para seguridad, no se acceda facilmente
  }


  RegistrarAlquiler(AlquilerRecibido: Alquileres) {

    const body = {

      Fecha_Emision:AlquilerRecibido.Fecha_Emision,
      Fecha_Recepcion:AlquilerRecibido.Fecha_Recepcion,
      Id:AlquilerRecibido.Id,
      KmEmision:AlquilerRecibido.KmEmision,
      KmRecepcion:AlquilerRecibido.KmRecepcion,
      KmRecorridos:AlquilerRecibido.KmRecorridos,
      Cargos_Adicionales:AlquilerRecibido.Cargos_Adicionales,
      Total:AlquilerRecibido.Total,
      Placa_Vehiculo:AlquilerRecibido.Placa_Vehiculo,
      Cc_Clientes:AlquilerRecibido.Cc_Clientes,
      Id_Empleados:AlquilerRecibido.Id_Empleados,
      Valor_Inicial:AlquilerRecibido.Valor_Inicial,
      Disponible:AlquilerRecibido.Disponible

    };

    return this.Agregar(body,'AddAlquiler')
  }
  ConsultarAlquileres(){
    return this.Consultar('getAlquiler');
  }



}
