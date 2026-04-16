"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name; // '!' => not null
    year;
    constructor(nameOrData, year) {
        if (typeof nameOrData === 'string') {
            this.name = nameOrData;
            this.year = year;
        }
        else if (typeof nameOrData === 'object') {
            this.name = nameOrData.name;
            this.year = nameOrData.year;
        }
    }
}
const toyota = new Car('Toyota', new Date('2021-10-11'));
const chevrolet = new Car({
    name: 'Chevrolet',
    year: new Date('2025-10-11'),
});
console.log(toyota);
console.log(chevrolet);
//# sourceMappingURL=app.js.map