import { pokeApi } from "../utils/Axios.js";

class PokemonService {
  async getPokemon() {
    const response = await pokeApi.get('pokemon')
    console.log('Got Pokemon!', response.data)

  }
}

export const pokemonService = new PokemonService()