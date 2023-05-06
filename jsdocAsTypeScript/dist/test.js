"use strict";
// Тут мы пробуем JSDoc в качестве аннотации типов для TS, что бы писать код на JS
/**
 *Эта функция что то делает. Ее можно обозначить вот так:
 *
 * @function
 * @param {number} value это параметр с типом number
 * @param {number} min и это параметр с типом number
 * @param {number} max и даже это параметр с типом number
 * @returns {void} функция ничего не возвращает
 */
function firstFunction(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
    console.log(Math.max(min, Math.min(max, value)));
}
firstFunction(0, 10, 100);
/**
 * Эта функция тоже делает что то!!!
 *
 * @function
 * @typedef {{startDay:number, finishDay:number, itemsPerDay:number}}
 * @param {{startDay:number, finishDay:number, itemsPerDay:number}} params
 * @returns {number} функция возвращает number
 */
function calcItemsUsedBetweenDays({ startDay, finishDay, itemsPerDay }) {
    return (finishDay - startDay) * itemsPerDay;
}
console.log(calcItemsUsedBetweenDays({
    "startDay": 0,
    "finishDay": 3,
    "itemsPerDay": 5
}));
//# sourceMappingURL=test.js.map