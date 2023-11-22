import { Component,Input } from '@angular/core';
import { Cargos } from '../interface/empleados.interface';
import { CargosService } from '../services/cargos.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent {

  constructor(private CargoServicio: CargosService) { };

  @Input() Cargo: Cargos = {

    Id_Cargo: 0,
    Nombre:'',
    Administracion:'EN',
    Disponible:'SI'
  }
 

  AgregarCargo() {

    if ((this.Cargo.Nombre=='') || (this.Cargo.Administracion=='')){
      return;
    }

    this.CargoServicio.RegistrarCargo(this.Cargo)
      .subscribe(resp => {
        console.log(resp);
      });

  }

  onCheckboxChange(event: any) {
    // Verificar el estado del checkbox utilizando la propiedad checked
    if (event.target.checked) {
      this.Cargo.Administracion = 'EA';  //EMPLEADO ADMINISTRADOR
    } else {
      this.Cargo.Administracion = 'EN'; //EMPLEADO NORMAL
    }
  }

}
