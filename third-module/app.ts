interface IDrivable {
    startEngine(): void;
    drive(speed: number): void;
}

interface IFlyable{
    fly(speed: number): void
}

class Car implements IDrivable, IFlyable {
    model: string

    constructor(model: string) {
        this.model = model
    }

    startEngine(): void {
        console.log("Starting engine...");
    }

    drive(speed: number): void {
        console.log(`${this.model}: Driving at ${speed} km/h.`);
    }

    fly(speed: number): void {
        console.log(`${this.model}: Flying at ${speed} km/h.`);
    }
}

const toyota = new Car('Toyota');
toyota.startEngine();
toyota.drive(100)
toyota.fly(220)

const honda = new Car('Honda');
honda.startEngine();
honda.drive(150)
honda.fly(250)

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