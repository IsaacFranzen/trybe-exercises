const myRemove = require('./myRemove.js')

describe('Testando a função myRemove',()=>{
    it('Primiero teste',()=>{
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
  })