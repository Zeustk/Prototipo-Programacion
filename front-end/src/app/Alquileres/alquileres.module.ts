import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';

import { AlquilerComponent } from './alquiler/alquiler.component';


@NgModule({
    declarations:[
       
        AlquilerComponent,
        
    ],
    exports:[
        AlquilerComponent,
    ],
    imports:[
        CommonModule,
        
    ]

})
export class AlquilerModule{

}