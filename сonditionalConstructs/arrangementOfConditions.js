const {
  measurementFunction,
} = require('../commonUtils/executionSpeedMeasurement');
const { getRandomCondition } = require('../commonUtils/getRandomCondition');

const getResultTroughMap = () => {
  const conditionsMap = new Map()
    .set('true false', 'result 1')
    .set('false true', 'result 2');

  return conditionsMap.get(`${getRandomCondition()} ${getRandomCondition()}`);
};

const getResultTroughSwitch = () => {
  switch (`${getRandomCondition()} ${getRandomCondition()}`) {
    case 'false true':
      return 'result 1';
    case 'true false':
      return 'result 2';
    default:
      return undefined;
  }
};

getResultTroughMap();
getResultTroughSwitch();

measurementFunction(getResultTroughMap);
measurementFunction(getResultTroughSwitch);
