
import { Injectable } from '@angular/core';
import { Marcas } from '../../Interfaces/vehiculos.interface';
import { CrudService } from 'src/app/ServiceCrud/crud.service';

@Injectable()
export class MarcaService extends CrudService<Marcas>{

  private _marcas: Marcas[]=[];

  get Marcas(): Marcas[] {
   
    return [...this._marcas]; //Para seguridad, no se acceda facilmente
  }

  RegistrarMarca(MarcaRecibido:Marcas) {

    const body = { id_Marca:MarcaRecibido.id_Marca,Nombre: MarcaRecibido.Nombre, Disponible:MarcaRecibido.Disponible };

    return this.Agregar(body,'AddMarca');
  }

  ConsultarMarcas(){
    return this.Consultar('getMarca');
  }

  

}
