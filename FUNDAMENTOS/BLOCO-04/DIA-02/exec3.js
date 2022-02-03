let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDeTodos = 0;


for(let index = 0; index < numbers.length; index += 1){
    somaDeTodos += numbers[index]

}
let mediaArit = somaDeTodos/numbers.length;
console.log(mediaArit)