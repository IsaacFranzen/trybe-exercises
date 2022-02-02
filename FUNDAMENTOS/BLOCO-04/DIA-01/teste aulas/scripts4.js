const notaDesafio = 59;
 
if(notaDesafio >= 80){
    console.log('Parabéns, você foi aprovado!!');
}
else if(notaDesafio < 80 && notaDesafio >= 60){
    console.log('Você está na nossa lista de espera')
}
else if(notaDesafio < 60){
    console.log('Você foi reprovada(o)')
}