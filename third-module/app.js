"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`Moving ${this.name} `);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('meow-meow');
    }
}
const cat = new Cat('Kitty');
cat.move();
cat.makeSound();
//# sourceMappingURL=app.js.map