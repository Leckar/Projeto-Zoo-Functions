const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

function getAnimals(region) { // Funcionando
  const animalList = species.filter(({ location }) => location === region).map(({ name }) => name);
  return animalList;
}
function animalsByName(nome, p) {
  const target = species.find(({ name }) => name === nome);
  const list = {};
  list[nome] = [];
  if (p.sorted) {
    const aniList = target.residents.map(({ name }) => name);
    list[nome] = aniList.sort();
    return list;
  }
  list[nome] = target.residents.map(({ name }) => name);
  return list;
}
function animalsBySex(nome, p) {
  const target = species.find(({ name }) => name === nome);
  const list = {};
  list[nome] = [];
  if (p.sorted) {
    const aniList = target.residents.filter(({ sex }) => sex === p.sex).map(({ name }) => name);
    list[nome] = aniList.sort();
    return list;
  }
  list[nome] = target.residents.filter(({ sex }) => sex === p.sex).map(({ name }) => name);
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
