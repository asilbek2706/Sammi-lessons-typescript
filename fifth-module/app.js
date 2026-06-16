"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Object.defineProperty(exports, "__esModule", { value: true });
// #1. Decorator
function CreatedAt(constructor) {
    return class extends constructor {
        createdAt = new Date();
    };
}
// #2. Course class
let Course = class Course {
    name = 'Typescript';
    excerpt = 'Learn Typescript from scratch';
};
Course = __decorate([
    CreatedAt
], Course);
// #3. Lesson class
let Lesson = class Lesson {
    name = 'What is Typescript?';
    content = 'Introduction to Typescript';
};
Lesson = __decorate([
    CreatedAt
], Lesson);
const course = new Course();
const lesson = new Lesson();
console.log(course);
console.log(lesson);
//# sourceMappingURL=app.js.map