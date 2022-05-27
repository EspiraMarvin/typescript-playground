"use strict";
var _a;
let numbers = [1, 2, 3, 4];
let user = [1, 'Marvin'];
let mySize = 2;
console.log('mySize', mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(100000);
calculateTax(100000, 2021);
let employee = {
    id: 1,
    name: 'Marvin',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantityTwo = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet('dirty pigg');
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log('customer birthday', (_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
let logA = (message) => console.log(message);
log === null || log === void 0 ? void 0 : log('a');
logA === null || logA === void 0 ? void 0 : logA('A');
//# sourceMappingURL=index.js.map