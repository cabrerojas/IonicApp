import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable()
export class DeseosService {
    listas: Lista[]=[];
    
    constructor() {

        this.cargarStorage();
       /* const LISTA1 = new Lista('Recolectar piedras de infinito');
        const LISTA2 = new Lista('Heroes a vencer');

        this.listas.push(LISTA1,LISTA2);

        console.log(this.listas);
*/
    }

    agregarLista(lista: Lista){
        this.listas.push(lista);
        this.guardarStorage();

    }

    borrarLista(lista: Lista){
        this.listas = this.listas.filter(listaData =>{
            return listaData.id !== lista.id
        });

        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.listas));

    }
    cargarStorage(){
        if(localStorage.getItem('data')){
            this.listas = JSON.parse(localStorage.getItem('data'));

        }else{
            this.listas = [];

        }
    }

}