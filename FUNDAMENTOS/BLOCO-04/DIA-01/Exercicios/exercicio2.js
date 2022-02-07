/* const numero1 = 5;
const numero2 = 10;

if(numero1>numero2){
console.log('O primeiro número é o maior.')
}
else{
    console.log('O segundo número é o maior.')
}
 */
function maiorNumero(numero1,numero2){
    if(numero1 > numero2){
        return numero1 + ' é maior que '+ numero2;
    } else if (numero2 > numero1){
        return numero2 + ' é maior que o '+ numero1;
    }
    else{
        return 'Os números são iguais';
    }
}
console.log(maiorNumero(10,100));

/* function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  */