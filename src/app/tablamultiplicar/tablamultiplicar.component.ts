import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css'],
})
export class TablamultiplicarComponent implements OnInit {
  public activeTablaMult: boolean;
  @ViewChild('numero') numero: ElementRef;
  public filas: Array<string>;

  tablaMult() {
    let num1 = parseInt(this.numero.nativeElement.value);
    this.filas = [];
    for (let i = 0; i <= 10; i++) {
      this.filas.push(num1 + ' * ' + i + ' = ' + num1 * i);
    }
    this.activeTablaMult = true;
  }
  constructor() {
    this.activeTablaMult = false;
    this.filas = [];
  }

  ngOnInit(): void {}
}
