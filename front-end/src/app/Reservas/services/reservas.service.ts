import { Injectable } from '@angular/core';
import { Reservas } from '../interface/reserva.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class ReservasService extends CrudService<Reservas> {

  private _Reservas!: Reservas;

  get Reservas(): Reservas {
    return { ...this._Reservas }; //Para seguridad, no se acceda facilmente
  }

  RegistrarReservas(ReservasRecibidas:Reservas) {


    this._Reservas=ReservasRecibidas;
   
    const body = {Fecha_Inicio:ReservasRecibidas.Fecha_Inicio, Fecha_Final:ReservasRecibidas.Fecha_Final,Cc_Cliente:ReservasRecibidas.Cc_Cliente,Placa_Vehiculo:ReservasRecibidas.Placa_Vehiculo };

    return this.Agregar(body,'addReserva');
  }
}
