import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading:boolean = true;

  constructor(private _heroesService: HeroesService) {

    this._heroesService.getHeroes().subscribe(heroesList => {
      console.log(heroesList);
      this.heroes = heroesList;
      this.loading = false;
    });

  }

  ngOnInit() {
  }

  eliminarHeroe(key$:string) {

    this._heroesService.eliminarHeroe(key$).
    subscribe(respuesta => {
      if(respuesta) {
        console.error(respuesta);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
