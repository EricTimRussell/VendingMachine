import { appState } from "../AppState.js";
import { vendService } from "../Services/VendingService.js";


function _drawTotal() {
  let total = appState.snacks
  let template2 = ''
  total.forEach(t => template2 += t.template)
  // @ts-ignore
  document.getElementById('total').innerHTML = template
}


function _drawSnacks() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.template)
  // @ts-ignore
  document.getElementById('snacks').innerHTML = template
}


export class VendingController {
  constructor() {
    _drawSnacks()
  }

  vendSnack(name) {
    vendService.vendSnack(name)
    _drawSnacks
    
  }
}





  // _drawSnacks() {

  //   let snacks = appState.snacks
  //   let template = ''
  //   snacks.forEach(s => {
  //     template += `
  //   <div class="col-12 d-flex">
  //     <h1>${s.name}</h1>
  //     <h1>${s.price}</h1>
  //     <button class="btn btn-primary" onclick="app.vendingController.vendSnack('Gummies')">Snaaaakes</button>
  //   </div>
  // `
  //   })
  //   // @ts-ignore
  //   document.getElementById('snacks').innerHTML = template
  // }

