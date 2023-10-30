import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { InterfazConsultaComponent } from './interfaz-consulta/interfaz-consulta.component';



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