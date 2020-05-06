// classe abstrada só pode ser herdada, nunca pode ser construida diretamente com New

export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error ('Você não deveria instaciar um objeto do tipo Conta diretamente é uma class Abstrata');//fim do lançamento de erro
            
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
            
        

    } //fim do construtor


    /*FIXME:  nesse trecho do codigo ele verifca se a minha referencia de cliente feita no index.js
    tem instaciado a Classe Cliente, se sim, ele aceita o novo valor.
     */
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    } //fim do Set Cliente


    get cliente() {
        return this._cliente;
    } //fim do Get Cliente


    get saldo() {
        return this._saldo;
    } //fim do Get Saldo



    //FIXME: Metodos

    //metodo abstrato, ou seja, ele necessita ser sobreescrito em cada filho.
    sacar(valor) {
        throw new Error ( `Método abstrato, você precisa sobreescreve-lo`)//fim do lançamento de erro
    
    } //fim de sacar

//foi utilizado esse metodo privado para não ser necessario escrever mais códigos 
    _sacar(valor, taxa) {

        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }


    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    } //fim de depositar



    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    } //fim de transferir


} //fim da classe