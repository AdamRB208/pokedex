import { AppState } from "../AppState.js";
import { sbxpokemonService } from "../services/SBXPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SBXPokemonController {
  constructor() {
    console.log('SBX Controller loaded');
    AppState.on('identity', this.getSBXPokemon)
    this.getSBXPokemon()
  }

  async getSBXPokemon() {
    try {
      await sbxpokemonService.getSBXPokemon()
    } catch (error) {
      console.error('Could not get SBXPokemon', error)
      Pop.error(error, 'Could not get SBXPokemon')
    }
  }
}




