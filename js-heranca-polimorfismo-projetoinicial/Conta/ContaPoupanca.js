
//extend é a herança da classe Conta
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor (saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)

    }//fim de constructor

    sacar(valor){
        const taxa = 1.2
        return this._sacar(valor, taxa)
    }

}//fim da class