"use strict";
//Type Casting (Type Assertion) -> Tur bilan ishlash
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello World!";
let strLength1 = message.length; //Angle bracket syntax
console.log(strLength1);
let strLength2 = message; // as syntax
console.log(strLength2.length);
function getInfo(vehicle) {
    if ('speed' in vehicle) {
        console.log(`Speed: ${vehicle.speed}km/h`);
    }
    else {
        console.log(`Altitude: ${vehicle.altitude}metres`);
    }
}
getInfo({ speed: 100 });
getInfo({ altitude: 300 });
class Dog {
    bark() {
        console.log('Woof!');
    }
}
class Cat {
    meow() {
        console.log('Meow!');
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
//Asserts -> Tasdiqlash
function logNumber(value) {
    if (typeof value !== "number") {
        throw new Error('value is not a number');
    }
}
const age = 20;
logNumber(age);
console.log(age + 10);
//# sourceMappingURL=app.js.map