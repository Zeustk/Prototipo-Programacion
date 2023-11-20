import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/ServiceCrud/crud.service';
import { Empleados } from 'src/app/Vehiculos/Interfaces/empleados.interface';

@Injectable()
export class EmpleadosService extends CrudService<Empleados> {

  private _Empleados:Empleados []=[];

  get Empleados(): Empleados[] {
   
    return [...this._Empleados]; //Para seguridad, no se acceda facilmente
  }

  RegistrarEmpleado(EmpleadosRecibidos:Empleados) {

    const body = { Correo:EmpleadosRecibidos.Correo,Clave:EmpleadosRecibidos.Clave,Id:EmpleadosRecibidos.Id,Cargo:EmpleadosRecibidos.Cargo,Disponible:EmpleadosRecibidos.Disponible };

    return this.Agregar(body,'AddEmpleado');
  }

  ConsultarEmpleados(){
    return this.Consultar('getEmpleado');
  }

}
