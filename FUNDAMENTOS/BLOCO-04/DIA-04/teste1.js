/* let eu = {
    firstName :'Isaac',
    fullName : 'Isaac Franzen Borges Nascimento',
    bornCity: 'Goiânia',

};
console.log('Muito prazer, eu sou '+ eu.firstName +' nasci em '+ eu.bornCity) */
let player ={
    name: 'Marta',
    age :34,
    lastName : 'Silva',
    medals : {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
player['nomeCompleto'] = player.name+ ' '+ player.lastName;
console.log('A jogadora '+player.name+' '+player.lastName+' tem '+player.age+' de idade.');
console.log('A jogadora '+ player.nomeCompleto+' foi considerada a melhor do mundo por '+player.bestInTheWorld.length+' vezes.');
console.log('A jogadora possui '+player.medals.golden+' de ouro e '+ player.medals.silver+' medalhas de prata.');