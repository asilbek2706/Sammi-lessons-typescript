class User {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

class Payment {
    amount: number

    constructor(amount: number) {
        this.amount = amount
    }

    pay() {
        console.log(`Paying ${this.amount}`)
    }
}


class UserWithPayment {
    user: User
    payment: Payment

    constructor(user: User, payment: Payment) {
        this.user = user
        this.payment = payment
    }

    showInfo(){
        this.user.sayHello()
        this.payment.pay()
    }
}

const user = new User('Johnson');
const payment = new Payment(100)
const userWithPayment = new UserWithPayment(user, payment)
userWithPayment.showInfo()
// const userWithPayment = new UserWithPayment(new User('John'), new Payment(100))
