const fazObj = (nome) =>{
    const email = nome.toLowerCase().split(' ').join('_');
    let obj = {
        nomeCompleto: nome,
        email: `${email}@trybe.com`,
    }
    return obj;
  }
  const newEmployees = () => {
      const employees = {
        id1: fazObj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: fazObj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: fazObj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
      }
      return employees;
    };
  console.log(newEmployees())