import type { IData } from './interfaces/carDate.interface'

class Car {
    name!: string // '!' => not null
    year!: Date
    // isCar: boolean

    constructor(name: string, year: Date)
    constructor(data: IData)

    constructor(nameOrData: string | IData, year?: Date) {
        if (typeof nameOrData === 'string') {
            this.name = nameOrData
            this.year = year!
        } else if (typeof nameOrData === 'object') {
            this.name = nameOrData.name
            this.year = nameOrData.year
        }
    }
}

const toyota = new Car('Toyota', new Date('2021-10-11'))
const chevrolet = new Car({
    name: 'Chevrolet',
    year: new Date('2025-10-11'),
})

console.log(toyota)
console.log(chevrolet)
