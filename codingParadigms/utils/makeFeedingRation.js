const { getRandomInt } = require('../../commonUtils/getRandomInt');

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
