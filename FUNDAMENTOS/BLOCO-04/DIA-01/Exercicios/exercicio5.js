const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 10;
let somaDosAngulos = angulo1+angulo2+angulo3
 
if(angulo1+angulo2+angulo3 > 180){
    console.log('false')
}
else if(angulo1+angulo2+angulo3 < 180 && angulo1+angulo2+angulo3 > 0){
    console.log('true')
}
else if(angulo1 > 0 || angulo3 > 0 || angulo2 > 0){
    console.log('Erro')
}