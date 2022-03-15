const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const teste = names.reduce((acc,curr)=>{console.log(acc) && console.log(curr)
    return `${acc} ${curr}`})
return teste
}

  containsA(names)