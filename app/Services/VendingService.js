import { appState } from "../AppState.js";


class VendService {

  vendSnack(name) {
    let snack = appState.snacks.find(s => s.name == name)
    // @ts-ignore
    snack.vendSnack()
  }

  addTotal() {
    let total = 0
    appState.snacks.forEach(snack => {
      total += snack.price
    })
  }


}

export const vendService = new VendService()