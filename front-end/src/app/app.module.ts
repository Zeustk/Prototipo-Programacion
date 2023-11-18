import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ClienteModule } from './Cliente/cliente.module';
import { PrincipalModule } from './principal/principal.module';

import { AlquilerModule } from './Alquileres/alquileres.module';
import { VehiculoModule } from './Vehiculos/vehiculos.module';
import { EmpleadoModule } from './Empleados/empleados.module';
import { ConsultaModule } from './Consultas/consultas.module';
import { CarpetaCompartidaModule } from './CarpetaCompartida/carpetacompartida.module';
import { ReservasModule } from './Reservas/reservas.module';
import { MarcaService } from './Vehiculos/marca/services/marca.service';








@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
  providers: [MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
