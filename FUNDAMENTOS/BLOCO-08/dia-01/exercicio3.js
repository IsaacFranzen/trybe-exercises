const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalNota = (RIGHT_ANSWERS, STUDENT_ANSWERS, calcNota) =>{
    let correctAnswers =
}

const calcNota = (RIGHT_ANSWERS, STUDENT_ANSWERS) =>{
    let notaFinal = 0;
    for(let i = 0; i <= RIGHT_ANSWERS.length; i += 1)
    if(RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]){
        notaFinal = notaFinal + 1
        return notaFinal;
    }
}
console.log(calcNota())