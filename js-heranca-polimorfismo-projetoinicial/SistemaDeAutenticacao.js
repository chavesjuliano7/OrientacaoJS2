/*
Ser autenticavel significa ter a propriedade 'senha'
*/


// export class SistemaDeAutenticacao {

//     static login(autenticavel, senha){

//        return autenticavel.senha == senha;
//     }//fim do Login

// } // fim da class Sistema de Autenticacao;


/*Ser autenticavel significar ter um metodo autenticar */   
    export class SistemaDeAutenticacao {

    static login(referenciaDoObjeto, senha){
        // sendo um objeto estatico, é chamado somente com a classe que ela pertence
        if (SistemaDeAutenticacao.exiteDentroDoObjeto(referenciaDoObjeto)) { 
            return referenciaDoObjeto.autenticar(senha);
        }//fim do IF

        return false;

    }//fim do Login

    
    static exiteDentroDoObjeto (classeReferida){

        return 'autenticar' in classeReferida &&
                classeReferida.autenticar instanceof Cliente 
        
    }/*o metodo autenticar existe dentro da classe que eu estou chamando? Retorne verdadeiro ou falso
    O metodo autenticar do objeto da classe referida é um objeto funcao? Retorne verdadeiro ou falso*/

}