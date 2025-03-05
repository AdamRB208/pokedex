
export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.Url = data.Url
  }

  get buttonTemplate() {
    return `
  <div>
    <button class="btn btn-cyan mb-2 w-100" title="see details about pokemon" type="button">
      ${this.name}
    </button>
  </div>
  `
  }



}