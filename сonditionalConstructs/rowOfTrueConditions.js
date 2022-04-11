const {
  measurementFunction,
} = require('../commonUtils/executionSpeedMeasurement');
const { getRandomCondition } = require('../commonUtils/getRandomCondition');

const getResultTroughMap = () => {
  const conditionsMap = new Map();
  conditionsMap.set(
    JSON.stringify([
      getRandomCondition(),
      getRandomCondition(),
      getRandomCondition(),
      getRandomCondition(),
    ]),
    'result',
  );

  const conditions = JSON.stringify([, , , ,].fill(true));
  const conditionResult = conditionsMap.get(conditions);

  return conditionResult ? conditionResult : false;
};

const getResultTroughAmpersand = () =>
  getRandomCondition() &&
  getRandomCondition() &&
  getRandomCondition() &&
  getRandomCondition() &&
  'result';

getResultTroughMap();
getResultTroughAmpersand();

measurementFunction(getResultTroughMap);
// measurementFunction(getResultTroughAmpersand);
