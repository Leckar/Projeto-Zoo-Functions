const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((e) => (e.managers.some((idTarget) => (idTarget === id))));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const { employees } = data;
    const managed = employees.filter((e) => e.managers.some((idTarget) => idTarget === managerId));
    return managed.map((e) => `${e.firstName} ${e.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
