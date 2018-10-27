import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {

  heroesEncontrados: Heroe[] = [];

  termino:string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router:Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesEncontrados = this._heroesService.buscarHeroes(params['termino']);

    })

  }

  verHeroe(idx: number) {

    this.router.navigate(['/heroe', idx]);
  }


}
