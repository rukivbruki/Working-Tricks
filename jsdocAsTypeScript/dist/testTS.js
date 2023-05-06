"use strict";
// Тут мы используем чистый TS
let firstFunctionTS = (value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) => {
    return console.log(Math.max(min, Math.min(max, value)));
};
firstFunctionTS(1, 10, 100);
//=========================================================================//
function calcItemsUsedBetweenDaysTs({ startDay, finishDay, itemsPerDay }) {
    return (finishDay - startDay) * itemsPerDay;
}
console.log(calcItemsUsedBetweenDaysTs({
    "startDay": 0,
    "finishDay": 3,
    "itemsPerDay": 5
}));
//# sourceMappingURL=testTS.js.map