import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export function imprimir(...objetos: Negociacao[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}
