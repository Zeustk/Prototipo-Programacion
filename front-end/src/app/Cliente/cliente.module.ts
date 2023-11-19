import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './InicioSesionCl/inicio-sesion.component';


@NgModule({
    declarations:[
       
        RegistroComponent,
        InicioSesionComponent,
        
    ],
    exports:[
        RegistroComponent,
        InicioSesionComponent,
    ],
    imports:[
        CommonModule
    ]

})
export class ClienteModule{

}