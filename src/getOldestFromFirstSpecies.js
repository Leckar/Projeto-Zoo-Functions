const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const firstAnimal = employees.find((e) => e.id === id).responsibleFor[0];
  const { residents } = species.find((e) => e.id === firstAnimal);
  const z = residents.sort((a, b) => b.age - a.age)[0];
  return [z.name, z.sex, z.age];
}

module.exports = getOldestFromFirstSpecies;
