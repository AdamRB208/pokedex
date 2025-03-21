import { AppState } from "../AppState.js"
import { SBXPokemon } from "../models/SBXPokemon.js"
import { api } from "../utils/Axios.js"

class SBXPokemonService {

  async getSBXPokemon() {
    const response = await api.get('api/pokemon')
    console.log('Got Pokemon!', response.data)
    const sbxpokemon = response.data.map(pojo => new SBXPokemon(pojo))
    AppState.SBXPokemon = sbxpokemon
  }

}
export const sbxpokemonService = new SBXPokemonService()