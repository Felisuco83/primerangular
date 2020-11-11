import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import { PrimerComponente } from './../components/primercomponente/primercomponente.component';
import { CiclosVida } from 'src/components/primercomponente/ciclosvida/ciclosvida.component';
import { Deportes } from 'src/components/primercomponente/deportes/deportes.component';
import { NumerosRandom } from 'src/components/primercomponente/numerosrandom/numerosrandom.component';
import { PositivoNegativoCero } from '../components/primercomponente/positivonegativocero/positivonegativocero.component';
import { FormsModule } from '@angular/forms';
import { SumarnumerosComponent } from './sumarnumeros/sumarnumeros.component';
import { TablamultiplicarComponent } from './tablamultiplicar/tablamultiplicar.component';
import { FormulariopersonaComponent } from './formulariopersona/formulariopersona.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    CiclosVida,
    Deportes,
    NumerosRandom,
    PositivoNegativoCero,
    FormulariopersonaComponent,
    SumarnumerosComponent,
    TablamultiplicarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
