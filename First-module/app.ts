let numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]

const logger = () => {
    return numbers.map(num => `Number: ${num}`)
}

console.log(logger())

// let person: readonly [string, number] = ['Asilbek', 20]
// const [fullname, age] = person
//
// console.log(fullname)
// console.log(age)

// let admins: readonly number[] = [1, 2, 3, 4, 5];
// console.log(admins);