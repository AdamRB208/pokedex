import { AppState } from "../AppState.js";
import { sbxpokemonService } from "../services/SBXPokemonService.js";
import { Pop } from "../utils/Pop.js";

export class SBXPokemonController {
  constructor() {
    AppState.on('identity', this.getSBXPokemon)
    console.log('SBX Controller loaded');
    // this.getSBXPokemon()
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

// NOTE start with drawing pokemon and get observer for login, check network for order. 


