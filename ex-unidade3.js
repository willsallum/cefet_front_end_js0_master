function metodosVetor(vetor){
    vetor.sort();
    vetor.pop();
    vetor = ['abacate'].concat(vetor);
    return vetor;
}
escreva(0.6, 'Metodos de Vetor', metodosVetor(['laranja', 'uva', 'mamão', 'limão']));
escreva(0.6, 'Metodos de Vetor', metodosVetor([4, 0, 9]));

function metodosString(str){
    str = str.toUpperCase();
    str = str.replaceAll('O', 'A');
    str = str.replaceAll('Ó', 'A');
    str = str.replaceAll('Õ', 'A');
    str = str.replaceAll('Ô', 'A');
    str = str.replaceAll('Ò', 'A');
    return str;
}
escreva(0.7, 'Metodos String', metodosString('bolo'));
escreva(0.7, 'Metodos String', metodosString('pocotó.. pocotô... pocotõ'));
escreva(0.7, 'Metodos String', metodosString('Amando o amado apaixonado'));

//Exercício 09
function escreveDataPorExtenso(data){
    vetData = data.split('/');
    return vetData[0] + " de " + obtemNomeDoMes(vetData[1]) + " de " + vetData[2];
}
escreva(9, 'Data por Extenso', escreveDataPorExtenso('28/05/1961'));

// ex-10 Item 1
function eliminaCaracteres(texto, caracteresParaEliminar) {
    for (let caractere of caracteresParaEliminar) {
        texto = texto.replaceAll(caractere, '');
    }
    return texto;
}
escreva(10, 'Elimina caracteres', eliminaCaracteres('correndo contra o tempo', 'coe'));
// ex-10-Item 2
function substituiCaracteres(texto, caracteresProcura, caracteresSubstituirPor) {
    for(let i = 0; i < caracteresProcura.length; i++) {
        texto = texto.replaceAll(caracteresProcura[i], caracteresSubstituirPor[i]);
    }    
    return texto;
}
escreva(10, 'Subsitui caracteres', substituiCaracteres('o sapo nao lava o pe', 'aoe', 'iiu'));
// ex-10 Item 3
function inverteTexto(texto) {
    /*
    let textoInvertido = '';
    for(let i = texto.length-1; i >= 0; i--){
        textoInvertido += texto[i];
    }
    return textoInvertido;
    */
   return texto.split("").reverse().join(""); //split() -> string para array; reverse() -> inverte a ordem do array; join() -> array para string
}
escreva(10, 'Inverte string', inverteTexto('amor'));

function verificaPalindromo(string){
    string = string.toLowerCase();
    strNormal = 'aaaaeeiooou';
    strEspecial = 'áàâãéêíóôõú';
    texto = substituiCaracteres(string, strEspecial, strNormal);

    strNormal = ['','','','','','','','',''];
    strEspecial = [',','?','!','\'',';','-','_',':',' '];
    texto = substituiCaracteres(texto, strEspecial, strNormal);

    if(texto === inverteTexto(texto))
        return true;
    else
        return false;
}
escreva(11, 'Palíndromo?', verificaPalindromo('Socorram-me, subi no ônibus em Marrocos')?'É palíndromo!':'Não é palíndromo!');

function aplicaOperacaoEmCadaElemento(operacao, vetor1, vetor2){
    if(vetor1.length !== vetor2.length){
        escrevaMensagem(13, 'Erro: vetores devem ter mesmas dimensões!');
        return null;
    }
    resultado = [];
    for(let i = 0; i < vetor1.length; i++){
        resultado.push(operacao(vetor1[i], vetor2[i]));
    }
    return resultado;
}

function soma(a, b){
    return a + b;
}
escreva(13, 'Imprime soma dos vetores', aplicaOperacaoEmCadaElemento(soma, [4, 2, -1, 10], [10, 2, 3, 5]));
function multiplica(a, b){
    return a + b;
}
escreva(13, 'Imprime multiplicação dos vetores', aplicaOperacaoEmCadaElemento(multiplica, [4, 2, -1, 10], [10, 2, 3, 5]));
function subtrai(a, b){
    return a + b;
}
escreva(13, 'Imprime subtração dos vetores', aplicaOperacaoEmCadaElemento(subtrai, [4, 2, -1, 10], [10, 2, 3, 5]));

function daOiPara(funcaoDeDarOi, nomeDaPessoa) {
    
    // veja que aqui, independente do nome da função
    // externa, invocamos ela como funcaoDeDarOi
    textoDoOi = funcaoDeDarOi(nomeDaPessoa);
    
    escrevaMensagem(12, '=========== Início do chat ===========');
    escrevaMensagem(12, textoDoOi);
    escrevaMensagem(12, '======================================');
    escrevaMensagem(12, '<br>');
}

function funcaoDeDarOi(nome="Sallum"){
    return 'Olá Sr(a). ' + nome + ', tudo bem?'
}

function oiEmPortuguesFormal(nome) {
    return 'Oi Sr(a). ' + nome + ', como vai?';
}

let oiEmPortugues = function(nome) {
    return 'Oi ' + nome + ', blza?';
};


// dá oi para 'Daniel' de várias formas diferentes
daOiPara(oiEmPortuguesFormal, 'Daniel');
daOiPara(oiEmPortugues, 'Daniel');
daOiPara(function(nome) {
    return 'Hi ' + nome + ', how are you?';
}, 'Daniel');

daOiPara(funcaoDeDarOi, "Sallum");

