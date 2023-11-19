import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { InterfazConsultaComponent } from './interfaz-consulta/interfaz-consulta.component';
import { VehiculoModule } from '../Vehiculos/vehiculos.module';
import { ClienteModule } from '../Cliente/cliente.module';



@NgModule({
    declarations:[
       
      
        InterfazConsultaComponent,
        
        
    ],
    exports:[
        
        InterfazConsultaComponent,

    ],
    imports:[
        CommonModule,
       
    
        
  
    ]

})
export class ConsultaModule{

}