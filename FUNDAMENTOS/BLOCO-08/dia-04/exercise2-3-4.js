const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  /* const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft."; */
/* console.log(expectedResult) */
/* function reduceNames() {  const resultado = books.reduce((acumulator,item)=>acumulator.concat(`${item.author.name}`),[]).forEach((elemento,index)=>{
  console.log(index)
  const fraseComOsNomes = elemento[index]
  console.log(fraseComOsNomes)
})
return resultado */
/*   const stringNomes = books.reduce((acumulator,item)=>{
    console.log(item)
    acumulator = item.author.name
    console.log(acumulator)
  },` `) */
/* }
console.log(reduceNames()) */

/* const expectedResult = 43;

function averageAge() {
  const idadeLivrosLançados = books
  .map((elemento)=>{
    const idade1 = elemento.releaseYear - elemento.author.birthYear */
   /*  console.log(idade1) */
  /*   return idade1
  })
  const mediaDasIdades = idadeLivrosLançados.reduce((acumulator,item)=>{
    acumulator = acumulator + item
    const mediaIdade = acumulator
    return mediaIdade
  }) */
  /* console.log(idadeLivrosLançados)
  console.log(mediaDasIdades) */
  /* console.log(idadeLivrosLançados)
  .reduce((acumulator,item)=>{
    acumulator = acumulator + item
    const mediaIdade = acumulator
    return mediaIdade
  })
  console.log(idadeLivrosLançados)*/
/*   return mediaDasIdades/idadeLivrosLançados.length
}
console.log(averageAge())
 */

/* 
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
 */
function longestNamedBook() {
  const booksTest = books.reduce((acc, item)=>{
    let longestName = {};
    if(acc.name.length > item.name.length){
      longestName = acc;
    }
    return longestName  
  })
  return booksTest
}
console.log(longestNamedBook(books));