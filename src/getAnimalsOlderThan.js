const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, animalAge) {
  const { species } = data;
  const target = species.find(({ name }) => (name === animal));
  return target.residents.every(({ age }) => (age >= animalAge));
}

module.exports = getAnimalsOlderThan;
