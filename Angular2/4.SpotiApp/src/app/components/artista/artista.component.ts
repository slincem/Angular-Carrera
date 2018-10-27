import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {


  artista:any;
  pistas:any[];
  urlSpotify:string;

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.map(parametros => parametros['id']).subscribe(id => {
      console.log(id);

      this._spotifyService.getArtista(id).subscribe(data =>{

        this.artista = data;
        this.urlSpotify = this.artista.href;
        
      } );

      this._spotifyService.getTop(id).subscribe(data => this.pistas = data);

    })

  }

  irASpotify(){

    this.router.navigate(['/'+this.urlSpotify]);
  }

}
