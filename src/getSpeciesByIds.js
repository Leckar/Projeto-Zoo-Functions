const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length > 0) {
    const { species } = data;
    const target = ids.map((animalID) => (species.find(({ id }) => (id === animalID))));
    return target;
  }
  return [];
}
module.exports = getSpeciesByIds;
