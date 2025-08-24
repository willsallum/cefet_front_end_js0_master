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