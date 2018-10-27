import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor(private _spotifyservice:SpotifyService) { }

  ngOnInit() {

  }

  buscarArtista(){
    this._spotifyservice.getArtistas(this.termino).subscribe();
  }

}
