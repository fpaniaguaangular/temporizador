import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RelojComponent } from './reloj/reloj.component';
import { PieComponent } from './pie/pie.component';

import { FormsModule } from '@angular/forms';

import { PanelComponent } from './panel/panel.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { PeliculaComponent } from './peliculas/pelicula/pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    RelojComponent,
    PieComponent,
    PanelComponent,
    ListadoPeliculasComponent,
    PeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
