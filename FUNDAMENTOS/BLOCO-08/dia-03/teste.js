/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0);
console.log(sumNumbers); // 123 */

/* 
const maiorValor = (array) =>{
    let maiorNum = 0;
    for(let i = 0; i < array.length; i+= 1){
        if(array[i] > array[i+1])
         maiorNum = array[i];
    }
    return maiorNum
}
console.log(maiorValor(numbers)) */



/* const numbers = [50, 85, -30, 3, 15]
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger);  */
/* 

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const even = (array) => {
    const evenNumbes = array.filter((elemento)=>{elemento % 2 === 0
    })
    return evenNumbes;
}
console.log(even(numbers) */

/* 
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
      return arrays.reduce((valorAnterior, valorAtual)=>valorAnterior.concat(valorAtual),[])
  }
  console.log(flatten(arrays)) */


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

  function reduceNames() {
    return books.reduce((valorAnterior,valorAtual)=>valorAnterior.author.name.concat(valorAtual),[])
  }
  console.log(reduceNames(books));