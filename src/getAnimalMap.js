const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

function getAnimals(region) { // Funcionando
  const animalList = species.filter((e) => e.location === region).map((e) => e.name);
  return animalList;
}
function animalsByName(name, p) {
  const target = species.find((e) => e.name === name);
  const list = {};
  list[name] = [];
  if (p.sorted) {
    const aniList = target.residents.map((e) => e.name);
    list[name] = aniList.sort();
    return list;
  }
  list[name] = target.residents.map((e) => e.name);
  return list;
}
function animalsBySex(name, p) {
  const target = species.find((e) => e.name === name);
  const list = {};
  list[name] = [];
  if (p.sorted) {
    const aniList = target.residents.filter((e) => e.sex === p.sex).map((e) => e.name);
    list[name] = aniList.sort();
    return list;
  }
  list[name] = target.residents.filter((e) => e.sex === p.sex).map((e) => e.name);
  return list;
}
function namedAnimalsList(region, p) {
  const list = getAnimals(region);
  if (p.sex) {
    const srtdList = list.map((e) => (animalsBySex(e, p)));
    return srtdList;
  }
  const srtdList = list.map((e) => (animalsByName(e, p)));
  return srtdList;
}
function regionObj(opt) {
  const srtdObj = { NE: [], NW: [], SE: [], SW: [] };
  if (opt) {
    regions.forEach((e) => {
      srtdObj[e] = namedAnimalsList(e, opt);
    });
    return srtdObj;
  }
  regions.forEach((e) => {
    srtdObj[e] = getAnimals(e);
  });
  return srtdObj;
}
function namesIncluded(obj) {
  const param = { includeNames: true };
  if (obj.sex) { const { sex } = obj; param.sex = sex; }
  if (obj.sorted) { param.sorted = true; }
  const list = regionObj(param);
  return list;
}
function getAnimalMap(options) {
  if (options && options.includeNames) return namesIncluded(options);
  return regionObj(); // Funcionando
}
module.exports = getAnimalMap;
