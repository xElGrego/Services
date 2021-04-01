import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticuloDetalleComponent } from './componentes/articulo-detalle/articulo-detalle.component';
import { ArticuloService } from './services/articulo.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    PerfilComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  //Se importa los servicios dentro de providers
  providers: [
    UsuarioService,
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
