import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "../utils/Axios.js";

class PokemonService {
  async getPokemon() {
    const response = await pokeApi.get('pokemon')
    console.log('Got Pokemon!', response.data)
    const pokemon = response.data.results.map(pojo => new Pokemon(pojo))
    AppState.Pokemon = pokemon
  }
}

export const pokemonService = new PokemonService()