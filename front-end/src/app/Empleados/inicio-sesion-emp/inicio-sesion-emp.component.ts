import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion-emp',
  templateUrl: './inicio-sesion-emp.component.html',
  styleUrls: ['./inicio-sesion-emp.component.css']
})
export class InicioSesionEmpComponent {

  @Output() cambiarVisibilidadComponenteEmpleado = new EventEmitter<boolean>();

  
  CargarInterfazE(){
   
    this.cambiarVisibilidadComponenteEmpleado.emit(false);
  
  }


}
