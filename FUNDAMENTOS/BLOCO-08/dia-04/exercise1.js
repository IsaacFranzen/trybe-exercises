const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const newArray = arrays.reduce((acumulator,item)=> acumulator.concat(item),[])
    return newArray
  }
console.log(flatten())