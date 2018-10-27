import {ListaItem} from './lista-item';


export class Lista {

  nombre:string;
  terminada:boolean;
  id:number;

  items:ListaItem[];

  constructor(nombre:string){

    this.nombre = nombre;
    this.terminada = false;

  }
}
