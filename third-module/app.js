"use strict";
/**Access modifiers:
 * 1. public = accessible from outside the class
 * 2. private - accessible only within the class
 * 3. protected - accessible only within the class and its subclasses
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    age;
    constructor(age) {
        this.age = age;
    }
}
class Employee extends Person {
    name;
    salary;
    constructor(name, salary, age) {
        super(age);
        this.name = name;
        this.salary = salary;
    }
    showBonus() {
        return this.salary * 0.2;
    }
    showAge() {
        return this.age;
    }
}
const employee = new Employee('Asilbek', 1000, 30);
console.log(employee.name);
console.log(employee.showBonus());
console.log(employee.showAge());
//# sourceMappingURL=app.js.map