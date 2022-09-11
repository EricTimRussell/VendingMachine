export class Vend {

  constructor(name, price) {
    this.name = name
    this.price = price
  }

  vendSnack() {
    this.name
  }
  get template() {
    return `
  <div class="col-12 d-flex pt-2">
  <div>
  <button class="btn btn-primary" onclick="app.vendingController.vendSnack()">Buy</button>
  <h4>$${this.name}</h4>
  <h4>$${this.price}</h4>
  </div>
  </div>
  `
  }

}