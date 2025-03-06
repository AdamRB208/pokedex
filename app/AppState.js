import { Identity } from './Auth/Identity.js'
import { Pokemon } from './models/Pokemon.js'
import { SBXPokemon } from './models/SBXPokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Identity}*/
  identity = null

  /**@type {Pokemon[]}*/
  Pokemon = []

  /**@type {SBXPokemon[]}*/
  SBXPokemon = []
}

export const AppState = createObservableProxy(new ObservableAppState())