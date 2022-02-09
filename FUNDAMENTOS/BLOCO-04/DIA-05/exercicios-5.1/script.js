/* exercicio1 */
function mudandoP(){
    let paragrafo = document.getElementsByTagName('p')
    paragrafo[1].innerText='Quero estar trabalhando e aprendendo mais linguagens'
    console.log(paragrafo)
}
mudandoP();

/* exercicio2 */

function mudandoCor(){
    let corNova = document.getElementsByClassName('main-content')[0]
    corNova.style.background='rgb(76,164,109)';
    
}
mudandoCor();

/* exercicio3 */

function mudandoCorCentro(){
    let corCentro = document.getElementsByClassName('center-content')[0];
    corCentro.style.background='white';
}
mudandoCorCentro();

/* exercicio4 */

function mudandoH1(){
    let modificandoH1 = document.getElementsByClassName('title')[0];
    modificandoH1.innerHTML='Exercício 5.1 - JavaScript'
}
mudandoH1();

/* exercicio5 */

function mudandoTagP(){
    let maiuscula = document.getElementsByTagName('p')[0];
    maiuscula.innerHTML = maiuscula.innerHTML.toUpperCase();
}
mudandoTagP();

/* exercicio6 */

function consoleP(){
    let paragraph = document.getElementsByTagName('p')
    for(index = 0; index<paragraph.length;index +=1)
    console.log(paragraph[index].innerHTML)
}
consoleP();