import { Component } from '@angular/core';

/* Esto es un JSON */

@Component({

    selector: "mi-componente",
    // Es llamado el fichero html 
    templateUrl:"./mi-componente.component.html"
})

export class MiComponente{

    public titulo: string;

    constructor(){

        /* asigna el valor a la variable titulo en el constructor */
        this.titulo ="Hellow Bryan joyjoy";
        console.log("dis is fitfing");
    }
}