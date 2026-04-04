//Interfaces


import type {Person} from "./app.interface";

let person: Person = {
    firstName: 'Joe',
    lastName: 'Doe',
    role: 'Manager',
    logger: (message: string) => {
        console.log(message);
    },
}

person.role = 'Admin';

console.log(person);