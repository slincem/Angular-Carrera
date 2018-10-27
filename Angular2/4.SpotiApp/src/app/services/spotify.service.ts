import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "BQD7U2Q-vMnQo0epVwbl-LMdIDRjY4fLa70sEM5XwfEKaXDmXxS7nUcrLiky0WxVHm9blBtu8sMSvXRFEPU";

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists"

  constructor(private http:Http) { }


  getArtistas(termino:string){

    let headers = new Headers();
    headers.append('authorization',  `Bearer ${this.token}`);

    let query=`?q=${termino}&type=artist`;
    let url= this.urlBusqueda + query;

    return this.http.get(url, {headers}).map(res => {

      // console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      console.log(this.artistas);

      return this.artistas;
    });
  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);

    let query=`/${id}`;
    let url= this.urlArtista + query;

    return this.http.get(url, {headers}).map(res => {

       console.log(res.json());
       return res.json();


    });
  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);

    let query=`/${id}/top-tracks?country=US`;
    let url= this.urlArtista + query;

    return this.http.get(url, {headers}).map(res => {

       console.log(res.json().tracks);
       return res.json().tracks;


    });
  }

}
