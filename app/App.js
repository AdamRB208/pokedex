import { AuthController } from "./Auth/AuthController.js"
import { PokemonController } from "./controllers/PokemonController.js"
import { SBXPokemonController } from "./controllers/SBXPokemonController.js"


class App {

  pokemonController = new PokemonController()

  sbxpokemonController = new SBXPokemonController()

  authController = new AuthController()
}

window['app'] = new App()


