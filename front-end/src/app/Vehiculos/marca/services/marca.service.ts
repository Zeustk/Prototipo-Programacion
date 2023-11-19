
import { Injectable } from '@angular/core';
import { Marcas } from '../../Interfaces/vehiculos.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class MarcaService extends CrudService<Marcas>{

  private _marca!: Marcas;

  get Marca(): Marcas {
    return { ...this._marca }; //Para seguridad, no se acceda facilmente
  }

  RegistrarMarca(MarcaRecibido:Marcas) {


    this._marca=MarcaRecibido;
   
    const body = { Nombre: MarcaRecibido.Nombre, Disponible:MarcaRecibido.Disponible };

    return this.Agregar(body,'AddMarca');
  }

  

}
