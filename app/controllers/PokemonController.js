import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonController {
  constructor() {
    AppState.on('Pokemon', this.drawPokemon)
    this.getPokemon()
  }

  drawPokemon() {
    const pokemon = AppState.Pokemon
    let pokemonContent = ''
    pokemon.forEach(pokemon => pokemonContent += pokemon.buttonTemplate)
    const pokemonElem = document.getElementById('pokemonList')
    pokemonElem.innerHTML = pokemonContent
  }


  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      console.error('Could not get Pokemon', error)
      Pop.error(error, 'Could not get Pokemon')
    }
  }

  async getPokemonDetails() {

  }

}