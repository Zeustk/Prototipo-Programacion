import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { PrincipalComponent } from './principal.component';


@NgModule({
    declarations:[
        PrincipalComponent,

        
    ],
    exports:[
        PrincipalComponent
    ],
    imports:[
        CommonModule
    ]

})
export class PrincipalModule{

}