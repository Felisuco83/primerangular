import {Component} from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html"
})

export class Deportes {
    public sports: Array<String>;
    constructor(){
        //INICIAMOS LA VARIABLE CON UNA SERIE DE DEPORTES
        this.sports = ["Petanca", "Futbol", "Surf", "Tenis", "Curling","Baloncesto", "Balonmano","Mus", "Dardos"]
    }
}