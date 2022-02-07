let info = {
    personagem: 'Gandalf',
    origem: 'Senhor dos Anéis',
    nota: 'Um mago que nunca se atrasa, chega exatamente quando pretende chegar.',
    recorrente: 'Sim'
  };
  let info2 = {
      personagem: 'Bilbo',
      origem: 'Senhor dos Anéis',
      nota: 'Bolseiro.',
      recorrente:'sim'
  }
  for(let key in info){
      if(key === 'recorrente' &&
      info[key]=== 'sim'&&
      info2[key] === 'sim'){
       console.log('Ambos recorrentes')

      }else{
          console.log(info[key],' e', info2[key])
      }
    }
  
 /*  for(let key in info){
      console.log(key);
  } */
 /*  for(let key in info){
      console.log(info[key]);
  }
  console.log('Bem-vindo '+info.personagem) */

  
  