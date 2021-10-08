import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonObject, PokeObject, Result } from 'src/app/interface/pokemon';



@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})

export class ListaPokemonComponent implements OnInit {

  siguiente:string;
  buscara:string;
  atras:string;
  Pokemon:Pokemon;
  resultados:Result[] = [];
  busqueda:Result[]=[];
  forma="lista";
  url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`;
  constructor() { }

  ngOnInit(): void {
    this.traerLista(this.url);
  }

  cambiarForma(){
    if(this.forma == "lista"){
      this.forma = "cuadrado";
    }
    else{
      this.forma="lista";
    }
  }

  async buscar(buscar:string){
    this.resultados = [];
    let urlBuscar="https://pokeapi.co/api/v2/pokemon?limit=1117&offset=0"
    const resultados = await this.consultarListaPokemon(urlBuscar);
    const b =resultados.results.forEach( p =>{
      let a = p.name.indexOf(buscar);
      if(a > 0){
        this.resultados.push(p);
      }
    })
  }

  consultarListaPokemon(url:string):Promise<PokemonObject>
  {
    return fetch(url).
     then(res => res.json()).
     then(resJson => {
       return resJson;
     });
  }

  consultarPokemon(pokeUrl:string):Promise<Pokemon>{
        return new Promise(async (resolve,reject) => {
            const pokemon:PokeObject = await fetch(pokeUrl).
            then(res => res.json()).
            then(resJson => resJson).
            catch(error =>{
                const newPokemon = new Pokemon("","","",0,0,0,);
                resolve(newPokemon);
            });
            try{
                this.Pokemon = new Pokemon(pokemon.sprites.front_default,pokemon.name,'',pokemon.id,pokemon.weight,pokemon.height);
                resolve(this.Pokemon);
            }catch(error){
                reject(error)
        }
        });
  }

  async traerLista(url:string){
    this.resultados = [];
    const resultados = await this.consultarListaPokemon(url);
    this.siguiente = resultados.next;
    this.atras = resultados.previous;
    resultados.results.map( p =>{
      this.resultados.push(p);
    })
    console.log(this.resultados);
  }

  siguientesPokemon(){
    console.log(this.siguiente);
    this.traerLista(this.siguiente);
  }

  anterioresPokemon(){
    this.traerLista(this.atras);
  }


}
