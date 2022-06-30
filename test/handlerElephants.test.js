const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined caso não seja passado parâmetro', () => {
    expect(undefined).toEqual(handlerElephants());
  });
  it('Retorna inválido caso não seja passada uma string', () => {
    expect('Parâmetro inválido, é necessário uma string').toEqual(handlerElephants(5));
    expect('Parâmetro inválido, é necessário uma string').toEqual(handlerElephants(true));
  });
  it('Retorna a id da espécie ao passar id', () => {
    const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(elephantsId).toEqual(handlerElephants('id'));
  });
  it('Retorna o nome da espécie ao passar name', () => {
    expect('elephants').toEqual(handlerElephants('name'));
  });
  it('Retorna a popularidade da espécie ao passar popularity', () => {
    expect(5).toEqual(handlerElephants('popularity'));
  });
  it('Retorna a localização da espécie ao passar location', () => {
    expect('NW').toEqual(handlerElephants('location'));
  });
  it('Retorna a disponibilidade de visitação da espécie ao passar availability', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(availability).toEqual(handlerElephants('availability'));
  });
  it('Retorna os dados dos animais da espécie ao passar residents', () => {
    const residents = [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ];
    expect(residents).toEqual(handlerElephants('residents'));
  });
  it('Retorna quantidade de elefantes ao passar count', () => {
    expect(4).toEqual(handlerElephants('count'));
  });
  it('Retorna um array com os nomes dos elefantes ao passar names', () => {
    const elephantNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(elephantNames).toEqual(handlerElephants('names'));
  });
  it('Retorna a média das idades dos elefantes ao passar averageAge', () => {
    expect(10.5).toEqual(handlerElephants('averageAge'));
  });
  it('Retorna null ao passar um parâmetro inexistente', () => {
    expect(null).toEqual(handlerElephants('happiness'));
    expect(null).toEqual(handlerElephants('height'));
    expect(null).toEqual(handlerElephants('movement speed'));
    expect(null).toEqual(handlerElephants('diet'));
  });
});
