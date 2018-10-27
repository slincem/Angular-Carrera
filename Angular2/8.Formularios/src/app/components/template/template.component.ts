import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`.ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }`]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    genero: "Masculino",
    acepta: false
  }

  paises = [{
    codigo: "CO",
    nombre: "Colombia"
    },
    {
      codigo: "AR",
      nombre: "Argentina"
    }];

    generos:string[] = ["Masculino", "Femenino"]

  constructor() { }



  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);


    console.log("Usuario", this.usuario);
  }

}
