import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './Cliente/cliente.module';
import { PrincipalModule } from './principal/principal.module';

import { AlquilerModule } from './Alquileres/alquileres.module';
import { VehiculoModule } from './Vehiculos/vehiculos.module';
import { EmpleadoModule } from './Empleados/empleados.module';
import { ConsultaModule } from './Consultas/consultas.module';
import { CarpetaCompartidaModule } from './CarpetaCompartida/carpetacompartida.module';
import { ReservasModule } from './Reservas/reservas.module';








@NgModule({
  declarations: [
    AppComponent,

 
  
    
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    PrincipalModule,
    AlquilerModule,
    VehiculoModule,
    EmpleadoModule,
    ConsultaModule,
    CarpetaCompartidaModule,
    ReservasModule,
    CarpetaCompartidaModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
