const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const target = species.find((inspect) => (inspect.name === animal));
  return target.residents.every((e) => (e.age >= age));
}

module.exports = getAnimalsOlderThan;
