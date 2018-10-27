import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL: string = "https://heroesapp-c7147.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-c7147.firebaseio.com/heroes/";

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesURL, body, { headers: headers }).map(
      res => {
        console.log(res.json());
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body, { headers: headers }).map(
      res => {
        console.log(res.json());
        return res.json();
      });
  }

  getHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers: headers }).map(
      res => res.json()
    );
  }

  getHeroes() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.heroesURL, { headers: headers }).map(
      res => res.json()
    );
  }

  eliminarHeroe(key$: string) {

    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url).map(res => res.json());
  }
}
