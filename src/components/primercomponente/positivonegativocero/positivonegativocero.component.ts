import {Component} from "@angular/core";

@Component({
    selector: "app-positivonegativo",
    styleUrls: ["./positivonegativocero.component.css"],
    templateUrl: "./positivonegativocero.component.html"

})

export class PositivoNegativo {
    public numeros: Array<Number>;
    constructor() {
        this.numeros = [1,0,-1];
    }
    generarNumero(){
        var aleat = Math.floor(Math.random()*100)+1;
        this.numeros.push(aleat);
    }
}