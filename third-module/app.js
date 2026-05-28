"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    pay() {
        console.log(`Paying ${this.amount}`);
    }
}
class UserWithPayment {
    user;
    payment;
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
    showInfo() {
        this.user.sayHello();
        this.payment.pay();
    }
}
const user = new User('Johnson');
const payment = new Payment(100);
const userWithPayment = new UserWithPayment(user, payment);
userWithPayment.showInfo();
// const userWithPayment = new UserWithPayment(new User('John'), new Payment(100))
//# sourceMappingURL=app.js.map