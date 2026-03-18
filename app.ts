function getInfo(): [string, number]{
    return ['Asilbek', 20]
}

const logger = getInfo()

const [fullName, age] = logger
console.log(fullName, age)


/*// Tuples unio type
let coordinates: [number, string | number] = [98, 12]
coordinates = [12, 'east']

console.log(coordinates[0])
console.log(coordinates[1])*/


// const person: [string, number] = ['AsilbekKaromatov', 20]
//
// person.push('false')
//
// console.log(person)
//
// console.log(person[0])
// console.log(person[1])
