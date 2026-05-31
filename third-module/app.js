"use strict";
/*
class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    greeting(){
        this.name = 'Hello World';
    }
}*/
Object.defineProperty(exports, "__esModule", { value: true });
/*class Counter{
    count: number = 1;

    increment(){
        console.log(this)
        console.log(this.count);
        this.count++;
    }
}

const counter = new Counter();
const incrementFn = counter.increment.bind(counter);

incrementFn()
incrementFn()
incrementFn()
incrementFn()
incrementFn()*/
/*class Counter {
    count: number = 1

    increment = () => {
        console.log(this)
        console.log(this.count)
        this.count++
    }
}

const counter = new Counter()
const incrementFn = counter.increment

incrementFn()
incrementFn()
incrementFn()
incrementFn()
incrementFn()*/
/*

class User{
    name: string = 'Asilbek'

    log(this: User){
        console.log(this.name);
    }
}*/
class Calculator {
    value = 0;
    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    getValue() {
        return this.value;
    }
}
const calc = new Calculator();
const result = calc.add(5).subtract(3).multiply(4).getValue();
console.log(result);
console.log(calc.getValue());
//# sourceMappingURL=app.js.map