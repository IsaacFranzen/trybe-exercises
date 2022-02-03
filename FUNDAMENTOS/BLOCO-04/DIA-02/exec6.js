let numbers = [10, 9, 5, 4];
 let numerosImpares = 0;

for (let index=0;index < numbers.length; index +=1){
   
    if(numbers[index]%2 !== 0){
        numerosImpares +=1;
        
    }
}
 if(numerosImpares === 0){
    console.log('Nenhum número ímpar.')
 }
else(console.log(numerosImpares))

