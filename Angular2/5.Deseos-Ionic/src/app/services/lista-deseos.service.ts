import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];
  idActual:any = 0;

  constructor() {

      // let lista1 = new Lista("Compras de supermercado");
      // let lista2 = new Lista("Juegos que deseo");
      // let lista3 = new Lista("Cosas de la Universidad");
      //
      // this.listas.push(lista1);
      // this.listas.push(lista2);
      // this.listas.push(lista3);
      this.cargarId();
      this.cargarData();

    }

    actualizarData(){

      localStorage.setItem("data", JSON.stringify(this.listas));

    }

    cargarData(){
      if(localStorage.getItem("data")){
        this.listas = JSON.parse(localStorage.getItem("data"));
      }

    }

    agregarLista(lista:Lista){

      let idListaNueva = this.obtenerIdLista();
      lista.id = idListaNueva;

      this.listas.push(lista);
      this.actualizarData();

    }

    eliminarLista(idx:number){

      let idxEnLista = -1;

      for(let lista of this.listas){

        if(lista.id == idx){
          idxEnLista = this.listas.indexOf(lista);
          break;
        }
      }
      this.listas.splice(idxEnLista, 1);
      this.actualizarData();

    }

    obtenerIdLista(){

      let idListaNueva = JSON.parse(localStorage.getItem("id"));
      let idSiguiente = idListaNueva + 1;
      localStorage.setItem("id", idSiguiente);
      return idListaNueva;


    }

    cargarId(){

      if(!localStorage.getItem("id")){
        localStorage.setItem("id", JSON.stringify(this.idActual));
      }
    }
}
