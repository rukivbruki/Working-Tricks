const {
  measurementFunction,
} = require('../commonUtils/executionSpeedMeasurement');
const items = [
  { id: '1', prod: 'cup' },
  { id: '2', prod: 'plate' },
  { id: '3', prod: 'knife' },
  { id: '4', prod: 'fork' },
];

const userItems = ['1', '3'];

const res = () => items.filter(({ id }) => userItems.includes(id));

// const res2 = () =>
//   userItems.reduce((acc, item) => {
//     acc.push(items.find((i) => i.id === item));
//     return acc;
//   }, []);

measurementFunction(res); //?
// measurementFunction(res2); //?
