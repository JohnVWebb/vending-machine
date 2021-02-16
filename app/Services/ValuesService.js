import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  addMoney(){
  ProxyState.money++
  console.log(ProxyState.money)
  }
}


export const valuesService = new ValuesService();

