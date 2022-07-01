const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idTarget) {
  const { employees, species } = data;
  const firstAnimal = employees.find(({ id }) => id === idTarget).responsibleFor[0];
  const { residents } = species.find(({ id }) => id === firstAnimal);
  const z = residents.sort((a, b) => b.age - a.age)[0];
  return [z.name, z.sex, z.age];
}

module.exports = getOldestFromFirstSpecies;
