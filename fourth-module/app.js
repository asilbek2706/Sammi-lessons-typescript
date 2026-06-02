"use strict";
/*
interface Box<T> {
    value: T
}

const stringBox: Box<string> = { value: 'Hello' }
const numberBox: Box<number> = { value: 42 }
*/
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: 'John',
};
const product = {
    id: 2,
    name: 'apple',
};
const course = {
    _id: 3,
    name: 'angular'
};
function getById(obj) {
    if (obj.id) {
        return obj.id;
    }
    else if (obj._id)
        return obj._id;
}
const userId = getById(user);
const productId = getById(product);
const courseId = getById(course);
console.log(userId);
console.log(productId);
console.log(courseId);
//# sourceMappingURL=app.js.map