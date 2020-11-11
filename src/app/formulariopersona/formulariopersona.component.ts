import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css'],
})
export class FormulariopersonaComponent implements OnInit {
  public user: any;
  public mensaje: string;
  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }

  // tslint:disable-next-line:typedef
  recibirDatos() {
    this.mensaje = 'Datos recibidos';
    console.log(this.user);
  }

  ngOnInit(): void {}
}
