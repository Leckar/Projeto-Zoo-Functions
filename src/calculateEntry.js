const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const children = entrants.filter((p) => p.age < 18).length;
  const adults = entrants.filter((p) => p.age >= 18 && p.age < 50).length;
  const seniors = entrants.filter((p) => p.age >= 50).length;
  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (entrants && entrants.length > 0) {
    const srtdArr = countEntrants(entrants);
    const total = (srtdArr.child * 20.99) + (srtdArr.adult * 49.99) + (srtdArr.senior * 24.99);
    return total;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
