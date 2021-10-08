import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonObject, PokeObject } from 'src/app/interface/pokemon';

@Component({
  selector: 'app-poke-trelo',
  templateUrl: './poke-trelo.component.html',
  styleUrls: ['./poke-trelo.component.css']
})
export class PokeTreloComponent implements OnInit {

  totalPokemon:number;
  pokemones:Pokemon[] = [];
  capturados:Pokemon[] = [];
  muertos:Pokemon[] = [];
  Pokemon:Pokemon;
  pokemonSeleccionado:Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokemonesLibres();
  }

  consultarListaPokemon():Promise<PokemonObject>
  {
    return fetch("https://pokeapi.co/api/v2/pokemon").
     then(res => res.json()).
     then(resJson => {
       return resJson;
     });
  }

  consultarPokemon(id:number):Promise<Pokemon>{
    return new Promise(async (resolve,reject) => {
        const pokemon:PokeObject = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).
        then(res => res.json()).
        then(resJson => resJson).
        catch(error =>{
            const newPokemon = new Pokemon("","","",0,0,0,);
            resolve(newPokemon);
        });
        try{
          console.log(pokemon.name);
          let p:Pokemon = new Pokemon(pokemon.sprites.front_default,pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,pokemon.name,pokemon.id,pokemon.weight,pokemon.height);
          this.pokemones.push(p);
          resolve(this.Pokemon);
        }catch(error){
            reject(error)
    }
    });
}

  async consultarCantidad(){
    const resultados = await this.consultarListaPokemon();
    this.totalPokemon = resultados.count;
    console.log(this.totalPokemon);
  }

  async pokemonesLibres(){
    this.pokemones = [];
    for (let i = 0; i < 5; i++) {
      let n = Math.floor((Math.random() * (152 - 1 + 1)) + 1);
      this.consultarPokemon(n);
    }
  }

  seleccionarPokemon(pokemon:Pokemon){
    this.pokemonSeleccionado = {...pokemon};
  }


  guardar(donde:string,pokemon?:Pokemon){

    if (donde == 'pokemones') {
      this.pokemones.push(pokemon);
    }

    if (donde == 'capturados') {
      this.capturados.push(pokemon);
    }

    if (donde == 'muertos') {
      this.muertos.push(pokemon);
    }


  }


  movimientos(de:string,adonde:string,pokemon:Pokemon){

    if ( de =='pokemones') {
      let posicion = this.pokemones.indexOf(pokemon);
      this.guardar(adonde,pokemon);
      this.pokemones.splice(posicion,1);
    }

    if ( de =='capturados') {
      let posicion = this.capturados.indexOf(pokemon);
      this.guardar(adonde,pokemon);
      this.capturados.splice(posicion,1);
    }

    if ( de =='muertos') {
      let posicion = this.muertos.indexOf(pokemon);
      this.guardar(adonde,pokemon);
      this.muertos.splice(posicion,1);
    }
  }



}
