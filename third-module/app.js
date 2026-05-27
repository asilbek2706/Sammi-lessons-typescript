"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model;
    constructor(model) {
        this.model = model;
    }
    startEngine() {
        console.log("Starting engine...");
    }
    drive(speed) {
        console.log(`${this.model}: Driving at ${speed} km/h.`);
    }
    fly(speed) {
        console.log(`${this.model}: Flying at ${speed} km/h.`);
    }
}
const toyota = new Car('Toyota');
toyota.startEngine();
toyota.drive(100);
toyota.fly(220);
const honda = new Car('Honda');
honda.startEngine();
honda.drive(150);
honda.fly(250);
/**implements ning afzalliklari:
 * 1. Type safety - tur xavfsizligi.
 * 2. Polymorphism - bir nechta class da ishlatish imkoniyati.
 * 3. Code organization - kodning tuzilishi
 * */
// implements - class'ga interface'ni require qilib qoyish...
/*interface IUser{
    logger(): void
}

class User implements IUser{
    logger(){
        console.log("Hello");
    }
}*/ 
//# sourceMappingURL=app.js.map