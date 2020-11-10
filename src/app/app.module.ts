import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import {PrimerComponente} from './../components/primercomponente/primercomponente.component';
import { CiclosVida } from 'src/components/primercomponente/ciclosvida/ciclosvida.component';
import { Deportes } from 'src/components/primercomponente/deportes/deportes.component';
import { NumerosRandom } from 'src/components/primercomponente/numerosrandom/numerosrandom.component';
import { PositivoNegativo } from 'src/components/primercomponente/positivonegativocero/positivonegativocero.component';

@NgModule({
  declarations: [
    AppComponent, PrimerComponente,CiclosVida, Deportes, NumerosRandom, PositivoNegativo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
