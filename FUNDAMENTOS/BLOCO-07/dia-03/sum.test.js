const sum = require('./sum.js');

describe ('Testando a função sum', ()=>{
    it('testa se a soma de 4 e 5 é 9',()=> {
        expect(sum(4, 5)).toBe(9);
    });
    it('Testa se a soma de 0 e 0 retorna 0', ()=>{
        expect(sum(0, 0)).toBe(0)
    });
    it('Testa se a função recebeu somente números como parâmetro',()=>{
        expect(() => sum(4, '5')).toThrow();
    });
    it('Testa se a mensagem de erro é: parameters must be numbers',()=>{
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
});