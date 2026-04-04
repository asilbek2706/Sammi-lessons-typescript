"use strict";
//Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    firstName: 'Joe',
    lastName: 'Doe',
    role: 'Manager',
    logger: (message) => {
        console.log(message);
    },
};
person.role = 'Admin';
console.log(person);
//# sourceMappingURL=app.js.map