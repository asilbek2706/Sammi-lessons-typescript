"use strict";
/*
function identuty<T, U>(val1: T, val2: U):[T, U] {
    return [val1, val2];
}

const stringIdentity = identuty<string, number>('Hello', 5)
const numberIdentity = identuty<number, string>(5, 'Hello')
const booleanIdentity = identuty<boolean, number>(true, 5)*/
Object.defineProperty(exports, "__esModule", { value: true });
function createShape(val) {
    return { radius: val };
}
const firstShape = createShape(10);
const secondShape = createShape('10deg');
console.log(firstShape);
console.log(secondShape);
//# sourceMappingURL=app.js.map