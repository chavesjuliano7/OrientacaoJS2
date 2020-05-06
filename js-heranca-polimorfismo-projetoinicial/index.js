// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from './Conta/ContaSalario.js';

// const cliente1 = new Cliente("Ricardo", 11122233309);
// const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
// const contaSalarioRicardo = new ContaSalario(cliente1)

// contaSalarioRicardo.depositar(1000)
// contaSalarioRicardo.sacar(10);

// console.log(contaPoupancaRicardo);
// console.log(contaCorrenteRicardo); 
//console.log(contaSalarioRicardo);
//import { Funcionario } from './Funcionarios/Funcionario.js';
import { Cliente }             from './Cliente.js';
import { Diretor }             from './Funcionarios/Diretor.js';
import { Gerente }             from './Funcionarios/Gerente.js';
import {SistemaDeAutenticacao} from './SistemaDeAutenticacao.js';


const diretor = new Diretor('Enedino',10000,3222621475 );
const gerente = new Gerente ('Juliano', 5000, 789456123);
const cliente = new Cliente ('Lais', 456789542, '321')

gerente.cadastraSenha('123')
diretor.cadastraSenha('123456');
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor,'123456');
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, '321');




console.log(gerenteEstaLogado, diretorEstaLogado);
console.log('resultado do index:',clienteEstaLogado);


