"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Provider;
(function (Provider) {
    Provider[Provider["payme"] = 1] = "payme";
    Provider[Provider["uzum"] = 2] = "uzum";
})(Provider || (Provider = {}));
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["Approved"] = "Approved";
    Status["Rejected"] = "Rejected";
})(Status || (Status = {}));
class Payment {
    id;
    status;
    createdAt;
    updatedAt;
    constructor(id) {
        this.id = id;
        this.status = Status.Pending;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    getLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    rejectPayment() {
        if (this.status === Status.Approved) {
            throw new Error(`Payment is already approved`);
        }
        this.status = Status.Rejected;
        this.updatedAt = new Date();
    }
}
const payme = new Payment(Provider.payme);
payme.status = Status.Approved;
setTimeout(() => {
    payme.rejectPayment();
    console.log(payme);
    const duration = payme.getLifeTime();
    console.log(duration);
    console.log(payme);
}, 1000);
/*
class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greeting(age: number): string {
        return `Hello ${this.name}, your age: ${age}`
    }
}

const user1 = new Person('Toyota')
console.log(user1)
const data = user1.greeting(20)
console.log(data)

const user2 = new Person('Chevrolet')
console.log(user2)
const data2 = user2.greeting(24)
console.log(data2)*/
//# sourceMappingURL=app.js.map