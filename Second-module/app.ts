// Type alias

import type {CompanyWorker} from "./app.type";

let worker1: CompanyWorker = {
    firstName: 'Asil',
    lastName: 'Dow' ,
    company: 'Google',
    role: 'Manager',
}

let worker2: CompanyWorker = {
    firstName: 'Asilbek',
    lastName: 'Dow' ,
    company: 'Microsoft',
    role: 'Frontend Developer'
}

/*import type {Logger} from "./app.type";

const log: Logger = (message) => {
    return message.toUpperCase();
}

console.log(log('Hello World!'));*/

/*import type {Person} from "./app.type";

const user1: Person = {
    firstName: 'Asilbek',
    lastName: 'Karomatov',
    age: 20,
    skills: ['Javascript', 'CSS', 'NodeJS'],
}

const user2: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    skills: ['Typescript', 'HTML', 'VueJs', 'Angular'],
}

console.log(user1)
console.log(user2)*/

/*
type ID = string | number

let userId: ID

userId = 1
userId = 'hello'

let productId: ID

productId = 2
productId = '3'*/
