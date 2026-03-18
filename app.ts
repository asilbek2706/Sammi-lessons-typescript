const cars: string[] = ["BMW", "Audi"]
const numbers: number[] = [1, 2, 3, 4, 5]
const bools: boolean[] = [true, true, false]

const result = numbers.map(num => `Number: ${num}`)
console.log(result)

// Union types
const mixed: (number | string)[] = [1, "Hello", 2, "World"]

/*const upperCaseCars = cars
    .map(car => car.toUpperCase())
    .filter(car => car.startsWith('B'))

console.log(upperCaseCars)*/

/*const person = {
    firstName: "Asilbek", // required
    lastName: "Karomatov", //required
    city: "Bukhara",
    skills: {
        programming: "typescript",
        design: "Figma",
    }
}

function getName(data: { firstName: string; lastName: string }): string {
    return `${data.firstName} ${data.lastName}`;
}

const person1 = getName(person)
console.log(person1)*/
/*
function getName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

const checkAdult = (age: number): boolean => {
    return age >= 18;
}

const age1 = checkAdult(19)
console.log(age1)

const person1 = getName("Asilbek", "Karomatov")
console.log(person1)

// void = hech narsa qaytarmaydi*/
