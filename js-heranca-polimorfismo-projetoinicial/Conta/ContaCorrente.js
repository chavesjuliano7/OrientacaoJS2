// metodo sobreescrito, metodo sacar

import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    /* o metodo foi sobreescrevendo a classe mae, nesse caso
    a classe mãe tem o mesmo no me do metodo, porem na classe filho
    ela foi alterada para um comportamento de dados mais especifico da classe filho. 
    */
    sacar(valor) {

        let taxa = 1.1
        this._sacar(valor, taxa)
    } //fim de sacar
}
