let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDeTodos = 0;


for(let index = 0; index < numbers.length; index += 1){
    somaDeTodos += numbers[index]

}
let mediaArit = somaDeTodos/numbers.length;
console.log('A média aritmética é: ',mediaArit)

if(mediaArit > 20){
    console.log('Valor maior que 20.')
}
else{
    console.log('Valor meno que 20.')
}