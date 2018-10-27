import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(parametros => {

      console.log("RUTA HIJA - Nuevo")
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
