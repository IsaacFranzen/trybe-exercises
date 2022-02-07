/* let array = [1,2,3,6,4,8,10];
let numero = 4;
for(let index = 0; index<=array.length; index+=1){
    if(numero == array){
        console.log(array[index])
    }
} */ 
let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for(let index = 0; index < fruits.length;index +=1){
    soma += fruits[index]
} 
if(soma <= 15){
    console.log('Menor que 16')
} else(console.log(soma))
