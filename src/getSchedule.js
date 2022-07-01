const data = require('../data/zoo_data');

function paramCheck(param) {
  const { hours, species } = data;
  if (Object.keys(hours).includes(param)) return 'day';
  if (species.some(({ name }) => name === param)) return 'animal';
  return false;
}
function animalSchedules(target) {
  const { species } = data;
  const targetSpecies = species.find(({ name }) => name === target);
  return targetSpecies.availability;
}

function animalFinder(targetDay) {
  const { species } = data;
  return species.filter((e) => e.availability.includes(targetDay)).map(({ name }) => name);
}
function daySchedules(target) {
  if (target === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const { hours } = data;
  const day = hours[target];
  const schedule = {};
  schedule[target] = { officeHour: `Open from ${day.open}am until ${day.close}pm`,
    exhibition: animalFinder(target) };
  return schedule;
}
function fullSchedule() {
  const schedule = {};
  const { hours } = data;
  const dayList = Object.keys(hours);
  dayList.forEach((day) => {
    const newObj = daySchedules(day);
    schedule[day] = newObj[day];
  });
  return schedule;
}
function getSchedule(scheduleTarget) {
  const check = paramCheck(scheduleTarget);
  switch (check) {
  case 'day':
    return daySchedules(scheduleTarget);
  case 'animal':
    return animalSchedules(scheduleTarget);
  default:
    break;
  }
  return fullSchedule();
}

module.exports = getSchedule;
