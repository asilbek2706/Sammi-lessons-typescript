"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Object.defineProperty(exports, "__esModule", { value: true });
/*function Logger(constructor: Function) {
    console.log(`Class created: ${constructor.name}`)
}

function FirstDecorator(constructor: Function) {
    console.log(`First Decorator: ${constructor.name}`)
}

@FirstDecorator
@Logger*/
function ChangeShape(constructor) {
    constructor.prototype.name = 'Triangle';
    constructor.prototype.color = '#ff0000';
}
let Circle = class Circle {
    name = 'circle';
    constructor() {
        console.log('Circle created');
    }
    getValue() {
        return this.name;
    }
};
Circle = __decorate([
    ChangeShape
], Circle);
const shape = new Circle();
console.log(shape);
// @ts-ignore
console.log(shape.color);
//
// function nullShape(shape: IShape) {
//     shape.name = 'null'
//     return shape
// }
//
// const shape = nullShape(changeShape(new Circle()))
// console.log(shape)
//# sourceMappingURL=app.js.map