import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* Se importa con al direccion de donde esta el typescript */
import { MiComponente } from './Components/mi-componente/mi-componenten.component';
import { PeliculasComponent } from './Components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
