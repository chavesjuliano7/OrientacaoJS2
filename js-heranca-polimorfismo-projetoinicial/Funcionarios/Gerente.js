import {Funcionario} from './Funcionario.js'

export class Gerente extends Funcionario{

    constructor (nome, salario, cpf) {
        super(nome, salario, cpf )

        this._bonificacao = 1.1;
    } //fim do construtor


} // fim da class Gerente