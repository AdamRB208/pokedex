
export class SBXPokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.creatorId = data.creatorId
  }

  get activetemplate() {
    return `
    <div class="bg-light shadow-md p-3 d-flex flex-column">
      <img class="pokemon-img"
        src="${this.img}"
        alt="img of ${this.name}">
      <h1>${this.name}</h1>
      <hr>
      <div>
        <span>${this.weight}</span>
        <span>${this.height}</span>
        <span>${this.health}</span>
      </div>
      <hr>
      <div>
        <span>${this.attack}</span>
        <span>${this.defense}</span>
        <span>${this.speed}</span>
      </div>
    </div>
    `
  }

}