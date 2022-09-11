export class total {

  constructor(prices) {
    this.prices = prices
  }

  get template2() {
    return `
  <div class="col-md-12 d-flex justify-content-center">
  <h1>Total: ${this.prices} $</h1>
  <h2 id="total"></h2>
  </div>
  `
  }
}