"use strict";
//Create classes
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const toyota = new Car('Toyota', new Date('2025-10-11'));
console.log(toyota);
toyota.name = 'Toyota Corolla';
console.log(toyota);
//# sourceMappingURL=app.js.map