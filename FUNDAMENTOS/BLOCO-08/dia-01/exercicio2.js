const sorteio = (nmrApostado, confereNmr) => {
    let nmrSorteado = Math.floor(Math.random() * 5) + 1;
    return confereResultado(nmrApostado,nmrSorteado);
};
const confereResultado = (nmrApostado,nmrSorteado) =>{
    if(nmrApostado === nmrSorteado){
        return "Parabéns você ganhou";
    } else{
        return "Tente novamente"; 
    }
};
console.log(sorteio(1,confereResultado()));


/* gabarito usou operador ternário:

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker)); */