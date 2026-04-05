//Type Casting (Type Assertion) -> Tur bilan ishlash

let message: unknown = "Hello World!"

let strLength1: number = (<string>message).length //Angle bracket syntax
console.log(strLength1)

let strLength2: string = message as string // as syntax
console.log(strLength2.length)

// Type guards -> Turi bilan tekshirish

type Car = {
    speed: number;
}

type Plane = {
    altitude: number;
}

function getInfo(vehicle: Car | Plane){
    if('speed' in vehicle){
        console.log(`Speed: ${vehicle.speed}km/h`);
    }else{
        console.log(`Altitude: ${vehicle.altitude}metres`);
    }
}

getInfo({speed: 100})
getInfo({altitude: 300})

class Dog{
    bark(){
        console.log('Woof!')
    }
}

class Cat{
    meow(){
        console.log('Meow!')
    }
}

function makeSound(animal: Dog | Cat) {
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }
}

makeSound(new Dog())
makeSound(new Cat())

//Asserts -> Tasdiqlash

function logNumber(value: unknown): asserts value is number {
    if(typeof value !== "number"){
        throw new Error('value is not a number')
    }
}

const age: unknown = 20
logNumber(age)
console.log(age + 10)