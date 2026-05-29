"use strict";
/*
class Counter {
    static count: number = 0
    private static secretKey: string = '123456'
    title: string

    constructor(title: string) {
        this.title = title
    }

    static increment() {
        this.count++
    }

    static add(a: number, b: number) {
        this.increment()
        return a + b
    }

    static gerSecretKey() {
        return this.secretKey
    }

    getTitle() {
        return this.title
    }
}

const c = new Counter('C1')
console.log(c)
console.log(c.getTitle())

console.log(Counter.count)
Counter.increment()
console.log(Counter.count)

console.log(Counter.add(5, 7))
console.log(Counter.count)*/
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    static message = "Hello World!";
}
class Child extends Parent {
}
console.log(Child.message);
//# sourceMappingURL=app.js.map