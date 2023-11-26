import { Component,Input } from '@angular/core';
import { Cargos } from '../interface/empleados.interface';
import { CargosService } from '../services/cargos.service';
import Swal from 'sweetalert2';


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

    if (this.Cargo.Nombre.trim()==''){
      Swal.fire('Oops!','El campo nombre se encuentra vacio','error')
      return;
    }

    this.CargoServicio.RegistrarCargo(this.Cargo)
      .subscribe(resp => {
        console.log(resp);
        Swal.fire('MSJ',resp);
        this.limpiarDatos();
        
      });

     
      
      


  }

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.Cargo.Administracion = 'EA';  //EMPLEADO ADMINISTRADOR
    } else {
      this.Cargo.Administracion = 'EN'; //EMPLEADO NORMAL
    }
  }

  limpiarDatos(){
    this.Cargo.Nombre='';
  }

}
