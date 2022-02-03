let arrayNum = [10,25,57,48,96,30,2]
let menorNum = arrayNum[0];
for(let index = 1; index < arrayNum.length; index +=1){
    if(arrayNum[index]<menorNum){
        menorNum = arrayNum[index]
    }
}
console.log(menorNum);