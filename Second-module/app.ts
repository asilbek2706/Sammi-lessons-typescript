//Unknown type

let person: unknown = {
    name: 'John',
    age: 32,
}

interface Person {
    name: string
    age: number
}

if (typeof person === 'object') {
    const obj = person as Person
    console.log(obj.name)
    console.log(obj.age)
}

/*let value: unknown = 'Hello World';
let string: string = <string>value
console.log(string.toUpperCase());*/

/*function logger(value: unknown) {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value.toFixed(2)
    } else{
        return value
    }
}

console.log(logger(true))
logger(false)*/
