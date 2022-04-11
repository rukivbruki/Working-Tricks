const { getRandomInt } = require('../../dist/utils/getRandomInt.js');

const makeFeedingRation = () =>
  new Map(
    Array.from({ length: 8 }, (_, idx) => [
      ++idx,
      {
        low: getRandomInt(33, 67),
        medium: getRandomInt(42, 84),
        high: getRandomInt(50, 101),
      },
    ]),
  );

module.exports = {
  makeFeedingRation,
};
