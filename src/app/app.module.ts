import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import {PrimerComponente} from './../components/primercomponente/primercomponente.component';

@NgModule({
  declarations: [
    AppComponent, PrimerComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
