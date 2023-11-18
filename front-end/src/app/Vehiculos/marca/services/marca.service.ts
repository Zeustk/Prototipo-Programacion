import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Marcas } from '../../Interfaces/vehiculos.interface';

@Injectable()
export class MarcaService {

  private baseUrl: string = environment.baseUrl
  private _marca!: Marcas;

  get Marca(): Marcas {
    return { ...this._marca }; //Para seguridad, no se acceda facilmente
  }

  constructor(private http: HttpClient) { }

  RegistrarMarca(MarcaRecibido:Marcas) {


    this._marca=MarcaRecibido;
    const url = `${this.baseUrl}/AddMarca`
    const body = { Nombre: MarcaRecibido.Nombre, Disponible:MarcaRecibido.Disponible };

    return this.http.post<string>(url, body)
  }

}
