const data = require('../data/zoo_data');

function paramChecker(n) {
  const { employees } = data;
  const a = employees.some(({ id }) => id === n.id);
  const b = employees.some((e) => e.firstName === n.name || e.lastName === n.name);
  if (!a && !b) throw new Error('Informações inválidas');
}
function employeeFinder(n) {
  const { employees } = data;
  const a = employees.some((e) => e.firstName === n.name || e.lastName === n.name);
  if (a) {
    const b = n.name;
    return employees.find((e) => e.firstName === b || e.lastName === b);
  }
  return employees.find(({ id }) => id === n.id);
}
function animalGetter(param) {
  const { species } = data;
  const animal = species.find(({ id }) => id === param);
  return [animal.name, animal.location];
}
function dataConstructor(param) {
  const eID = param.id;
  const name = `${param.firstName} ${param.lastName}`;
  const animalData = param.responsibleFor.map((aID) => (animalGetter(aID)));
  const eData = { id: eID,
    fullName: name,
    species: [],
    locations: [],
  };
  animalData.forEach((e) => {
    eData.species.push(e[0]);
    eData.locations.push(e[1]);
  });
  return eData;
}
function fullList() {
  const { employees } = data;
  const arr = employees.map((e) => (dataConstructor(e)));
  return arr;
}
function getEmployeesCoverage(obj) {
  if (obj) {
    paramChecker(obj);
    const person = employeeFinder(obj);
    const employeeData = dataConstructor(person);
    return employeeData;
  }
  return fullList();
}

module.exports = getEmployeesCoverage;
