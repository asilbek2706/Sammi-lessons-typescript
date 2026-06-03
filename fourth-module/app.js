"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    content;
    radius;
    constructor(content, radius) {
        this.content = content;
        this.radius = radius;
    }
    getValue() {
        return this.content;
    }
    getRadius() {
        return this.radius;
    }
}
const shape = new Shape('Hello', 20);
console.log(shape.getValue());
console.log(shape.getRadius());
const shape2 = new Shape(50, '42deg');
console.log(shape2.getValue());
console.log(shape2.getRadius());
//# sourceMappingURL=app.js.map