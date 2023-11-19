import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz-consulta',
  templateUrl: './interfaz-consulta.component.html',
  styleUrls: ['./interfaz-consulta.component.css']
})
export class InterfazConsultaComponent {
  mostrarTabla = false;
  mostrarBoton=false;

  mostrarTablaConsulta() {
    this.mostrarTabla = true;
    this.mostrarBoton=true;

  }
}
