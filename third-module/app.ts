/**Access modifiers:
 * 1. public = accessible from outside the class
 * 2. private - accessible only within the class
 * 3. protected - accessible only within the class and its subclasses
 * */

class Person {
    protected age: number

    constructor(age: number) {
        this.age = age
    }
}

class Employee extends Person {
    public name: string
    private salary: number

    constructor(name: string, salary: number, age: number) {
        super(age)
        this.name = name
        this.salary = salary
    }

    showBonus() {
        return this.salary * 0.2
    }

    showAge(){
        return this.age
    }
}

const employee = new Employee('Asilbek', 1000, 30)
console.log(employee.name)
console.log(employee.showBonus())
console.log(employee.showAge())
