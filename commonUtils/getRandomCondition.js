const getRandomCondition = () => [true, false][Math.floor(Math.random() * 2)];

module.exports = {
  getRandomCondition,
};
