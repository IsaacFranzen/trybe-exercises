const fatorial = numero => {
    let resultado = 1
    for(let i = 2; i<numero; i+=1){
        resultado *= i;
    } 
    return resultado;
}
console.log(fatorial(5));