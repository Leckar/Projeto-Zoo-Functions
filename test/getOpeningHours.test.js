const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se nenhum argumento for passado, deverá retornar todos os dias e horários de funcionamento', () => {
    const fullSchedule = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(fullSchedule).toEqual(getOpeningHours());
  });
  it('Se for passado um dia inexistente ou de forma incorreta deverá lançar um erro', () => {
    expect(() => getOpeningHours('mooday', '05:15-aM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('puDim', '05:15-aM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Se for passado um horário de forma incorreta deverá lançar um erro', () => {
    expect(() => getOpeningHours('Tuesday', 'O5:15-aM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Tuesday', '08:eoq-aM')).toThrow('The minutes should represent a number');
  });
  it('Se for passada uma abreviação errada deverá lançar um erro', () => {
    expect(() => getOpeningHours('Tuesday', '8:15-eoq')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Tuesday', '08:5-eoq')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Se for passado um horário inexistente deverá lançar um erro', () => {
    expect(() => getOpeningHours('Tuesday', '32:15-am')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '11:78-am')).toThrow('The minutes must be between 0 and 59');
  });
  it('Se forem passados horários nos quais o zoológico esteja fechado retornará que está fechado', () => {
    const closed = 'The zoo is closed';
    expect(closed).toEqual(getOpeningHours('Tuesday', '00:00-am'));
    expect(closed).toEqual(getOpeningHours('Tuesday', '06:00-am'));
    expect(closed).toEqual(getOpeningHours('Tuesday', '08:00-pm'));
    expect(closed).toEqual(getOpeningHours('Monday', '06:00-am'));
    expect(closed).toEqual(getOpeningHours('Monday', '06:00-pm'));
  });
  it('Se forem passados horários nos quais o zoológico esteja aberto retornará que está aberto', () => {
    const open = 'The zoo is open';
    expect(open).toEqual(getOpeningHours('Friday', '11:00-am'));
    expect(open).toEqual(getOpeningHours('Saturday', '06:00-pm'));
    expect(open).toEqual(getOpeningHours('Sunday', '03:00-pm'));
  });
});
