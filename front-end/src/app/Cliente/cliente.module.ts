import {CommonModule} from '@angular/common'
import {NgModule} from  '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';
import { InicioSesionComponent } from './InicioSesionCl/inicio-sesion.component';


@NgModule({
    declarations:[
       
        RegistroComponent,
        TipoClienteComponent,
        InicioSesionComponent,
        
    ],
    exports:[
        RegistroComponent,
        TipoClienteComponent,
        InicioSesionComponent,
    ],
    imports:[
        CommonModule
    ]

})
export class ClienteModule{

}