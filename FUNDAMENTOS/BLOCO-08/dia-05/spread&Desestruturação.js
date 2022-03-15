
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const trappistEnterpriseUserJob = (param1,param2)=>{
      let userAndJobInfos = {...param1,...param2}
      return userAndJobInfos
  }
  const newObject = trappistEnterpriseUserJob(user,jobInfos)
  console.log(newObject)
 /*  console.log(trappistEnterpriseUserJob(user,jobInfos)) */
  console.log(`Hi, my name is ${newObject.name}, I'm ${newObject.age} years old and I'm ${newObject.nationality}. I work as ${newObject.profession} and my squad is RLL-${newObject.squad}`)