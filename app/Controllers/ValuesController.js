import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  document.getElementById("current-money").innerText = ProxyState.money.toString()
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("money", _draw);
    _draw()
  }
  addMoney(){
    valuesService.addMoney()
    console.log("hello from controller")
  }
  addValue() {
    valuesService.addValue()
  }

}
