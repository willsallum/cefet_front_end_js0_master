function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
    let quantidade = 0;
    for (let elemento of elementos) {
        if(elemento === elementoSendoProcurado)
            quantidade++;
    }
    return quantidade;
}
escreva(0.4, "Quantidade", contandoElementosDoVetor([1, 5, 5], 5));                  // retorna 2
escreva(0.4, "Quantidade", contandoElementosDoVetor(['daniel', 'flávio'], 'joão'));  // retorna 0

function obtemNomeDoMes(numero) {
    if (numero < 1 || numero > 12) {
        escrevaMensagem(0.5, 'Mês inválido: ' + numero);
        return null;
    }
    
    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];

    return meses[numero-1];
}
escreva(0.5, "mês", obtemNomeDoMes(5));

function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, numero){
    for(x=1; x<=numero; x++){
        escreva(3, "h("+x+")", calculaAlturaBola(x, velocidadeInicial, gravidade));
        escreva(3, "v("+x+")", calculaVelocidadeBola(x, velocidadeInicial, gravidade));
    }
}
calculaVelocidadeAlturaBola(50, 9.81, 3);

function somatorio(n){
    let S = 0;
    for (let i = 1; i <= n; i+=2) {
        S += 1/i;
    }
    escreva(4, "S", S);
    return S;
}
somatorio(1);
somatorio(10);
somatorio(100);

function obtemPosicaoDoElemento(vetor, elemento){
    for(i=0; i<vetor.length; i++){
        if(vetor[i] === elemento){
            break;     
        }
    }
    if(i==vetor.length) return null;
    else return i;
}
let frutas = ['Pera', 'Uva', 'Abacaxi', 'Cenoura'];
escreva(5, "posicao", obtemPosicaoDoElemento(frutas, 'Abacaxi'));

function calculaMediaEntreExtremos(vetor){
    menor = maior = vetor[0];
    for(i=0; i<vetor.length; i++){
        if(vetor[i] < menor) menor = vetor[i];
        if(vetor[i] > maior) maior = vetor[i];
    }
    return (maior+menor)/2;
}
escreva(6, "mediaExtremos", calculaMediaEntreExtremos([3, -2, 12]));

function fibonacci(tamanhoSequencia) {
    let sequencia = [];
    
    
    escreva(7, 'Fib(' + tamanhoSequencia + ')', sequencia);
    return sequencia;
}

function fibonacci(n) {
    let sequencia = [];
    sequencia.push(n, 0, 1);
    while(n-- > 1){
        sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);
    }
    sequencia.shift();
    escreva(7, 'Fib(' + sequencia.length + ')', sequencia);
    return sequencia;
}
fibonacci(2);
fibonacci(8);
fibonacci(20);

function exibeAmigos(pessoas, amizades, nome){
    let vetor = []; // inicializa o vetor que terá os nomes das amizades
    posicao = obtemPosicaoDoElemento(pessoas, nome); //busca a posição do nome dentro do vetor pessoas
    for(let coluna = 0; coluna <= pessoas.length; coluna++) { // inica a leitura dos amigos a partir da pessoa (nome)
        if(amizades[posicao][coluna]===1) // testa se há amizade na posição atual
            vetor.push(pessoas[coluna]); // adiciona a amizade (1) no vetor criado
    }
    return vetor;
}
nomePessoas = ['Alice', 'Bob', 'Carol', 'Danielle'];
matrizAmizades =[[0,0,0,1],[1,0,1,1],[0,0,0,1],[1,1,0,0]];
procuraNome = "Bob";
escreva(8, "Amizades encontradas", exibeAmigos(nomePessoas, matrizAmizades, procuraNome));


function exibeAmigosEmComum(pessoas, amizades, X, Y){
    let amigosComuns = [];
    let amigosX = exibeAmigos(pessoas, amizades, X); // busca as amizades de nomeX
    escrevaMensagem(8, "Amigos de "+X+":");
    escrevaMensagem(8, amigosX.join(", "));
    let amigosY = exibeAmigos(pessoas, amizades, Y); // busca as amizades de nomeY
    escrevaMensagem(8, "Amigos de "+Y+":");
    escrevaMensagem(8, amigosY.join(", "));
    
    for(let i = 0; i < amigosX.length; i++){
        if(amigosY.indexOf(amigosX[i])>=0)
            amigosComuns.push(amigosX[i]);
    }
    return amigosComuns; 
}
nomePessoas = ['Alice', 'Bob', 'Carol', 'Danielle'];
matrizAmizades =[[0,0,0,1],[1,0,1,1],[0,0,0,1],[1,1,0,0]];
procuraNomeX = "Bob";
procuraNomeY = "Alice";

escreva(8, "Amizades Comuns encontradas", exibeAmigosEmComum(nomePessoas, matrizAmizades, procuraNomeX, procuraNomeY));