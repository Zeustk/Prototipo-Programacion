import { Component } from '@angular/core';
import { RegistroService } from '../Vehiculos/registro/services/registro.service';
import { Vehiculos } from '../Vehiculos/Interfaces/vehiculos.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private VehiculosServicio: RegistroService) { }

  // Agregar una clase al contenedor principal para usar el sistema de cuadrícula de Bootstrap

  ListaVehiculos:Vehiculos[]=[];




  ngOnInit(): void {

    this.CargarVehiculos();


  }




  CargarVehiculos() {

    this.VehiculosServicio.ConsultarVehiculo().subscribe(
      (ListVehiculos: Vehiculos[] | null) => {

        if (ListVehiculos != null) {
           
          this.ListaVehiculos=ListVehiculos;
        }

      }

    )

  }




// ...



}
