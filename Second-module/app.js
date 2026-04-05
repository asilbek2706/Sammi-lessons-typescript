"use strict";
//Unknown type
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: 'John',
    age: 32,
};
if (typeof person === 'object') {
    const obj = person;
    console.log(obj.name);
    console.log(obj.age);
}
/*let value: unknown = 'Hello World';
let string: string = <string>value
console.log(string.toUpperCase());*/
/*function logger(value: unknown) {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value.toFixed(2)
    } else{
        return value
    }
}

console.log(logger(true))
logger(false)*/
//# sourceMappingURL=app.js.map