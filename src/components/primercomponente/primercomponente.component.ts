import {Component} from '@angular/core';

//DECLARACION DEL COMPONENTE Y SU ESTRUCTURA DE ARCHIVOS, ADEMÁS DE SU NOMBRE
@Component ({
    //NOMBRE DEL COMPONENTE PARA LA APP
    selector: "app-primercomponente",
    //PLANTILLA PARA EL COMPONENTE
    templateUrl: "./primercomponente.component.html"
})

//ESTE NOMBRE ES PARA LA DECLARACIÓN EN MODULE
export class PrimerComponente {
    //DECLARAMOS VARIABLES PARA LA CLASE CON TIPO
    public nombre: string;
    public anyo: number;

    //LA PRIMERA VEZ QUE ENTRA EN EL COMPONENTE TENEMOS UN CONSTRUCTOR
    constructor() {
        console.log("Creando el primer componente");
        //CON THIS ACCEDEMOS A LAS PROPIEDADES
        this.nombre = "Tete Angular";
        this.anyo = 2020;

    }
}