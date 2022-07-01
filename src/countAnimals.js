const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (animal) {
    const targetedSpecies = species.find(({ name }) => name === animal.specie);
    const { residents } = targetedSpecies;
    if (animal.sex) {
      const quantity = residents.filter(({ sex }) => sex === animal.sex).length;
      return quantity;
    }
    const quantity = residents.length;
    return quantity;
  }
  const animalDatabase = {};
  species.forEach(({ name, residents }) => {
    animalDatabase[name] = residents.length;
  });
  return animalDatabase;
}

module.exports = countAnimals;
