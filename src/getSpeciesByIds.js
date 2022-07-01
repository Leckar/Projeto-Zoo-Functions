const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length > 0) {
    const { species } = data;
    const target = ids.map((id) => (species.find((animal) => (animal.id === id))));
    return target;
  }
  return [];
}
module.exports = getSpeciesByIds;
