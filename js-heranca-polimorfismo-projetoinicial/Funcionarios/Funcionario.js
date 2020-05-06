export class Funcionario {

    constructor (nome, salario, cpf) {

        if (this.constructor == Funcionario){
            
            throw new Error ('Classe Abstrada.')
        }


        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf
        
        this._bonificacao = 1;
        this._senha;
    }

    get senha () {
        return this._senha;
    }

    cadastraSenha(senha){
        this._senha = senha;
    }


    autenticar(senha){
        return senha == this._senha
    }



}