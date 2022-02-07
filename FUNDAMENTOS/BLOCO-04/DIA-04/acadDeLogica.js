/* Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.
/* exercicio1 */
/* Fórmulas: perimetro = (2base) + (2altura) area = base * altura
function perimetroQuadrilatero(base, altura){
   let perimetro = (2 * base)+(2 * altura);
   let area = base * altura;
   return {area ,perimetro}
}
console.log(perimetroQuadrilatero(5,2))/* 

Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 } 


Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: 'trybe' e 'be' valor esperado no retorno da função: true verificaFimPalavra('trybe', 'be');
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false;

Dica: Use o SPLIT. */
/* let numerosArray = [10, 15, 34, 25, 27, 19];
function oddOrEven() {
    let resultado = {
        impares: 0,
        pares: 0,
    }
    for (const numeros of numerosArray) {
        if (numeros % 2 === 0) {
           resultado.pares +=1;
        }
        else {
            resultado.impares += 1;
        }
    }
    return resultado
}
console.log(oddOrEven(numerosArray)) */
