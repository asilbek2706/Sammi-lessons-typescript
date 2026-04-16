//Create classes

class Car {
    name: string
    year: Date

    constructor(name: string, year: Date) {
        this.name = name
        this.year = year
    }
}

const toyota = new Car('Toyota', new Date('2025-10-11'))
console.log(toyota)
toyota.name = 'Toyota Corolla'
console.log(toyota)
