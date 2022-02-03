let numerosAleatórios = [10,50,45,87,125,140,19];
let maiorNum = 0;
for(let index = 0; index < numerosAleatórios.length;index+=1){
    if(numerosAleatórios[index]> maiorNum){
        maiorNum = numerosAleatórios[index]
    }
}
console.log(maiorNum);