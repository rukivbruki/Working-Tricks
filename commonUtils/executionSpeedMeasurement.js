const { performance, PerformanceObserver } = require('perf_hooks');

function median(measurements) {
  measurements.sort();
  return measurements[Math.ceil(measurements.length / 2)];
}

function average(measurements) {
  measurements.splice(0, 1);
  return measurements.reduce((a, b) => a + b) / measurements.length;
}

async function measurementFunction(func) {
  let measurements = [];
  for (let i = 0; i < 2; i++) {
    const observer = new PerformanceObserver(
      (list) => list.getEntries()[0].duration,
    );
    observer.observe({ buffered: true, entryTypes: ['measure'] });
    performance.mark('start');
    await func();
    performance.mark('end');
    measurements.push(performance.measure('measure', 'start', 'end').duration);
  }
  console.log(median(measurements).toFixed(3));
  console.log(average(measurements).toFixed(3));
}

module.exports = {
  measurementFunction,
};
