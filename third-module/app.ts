class Employee {
    private _salary: number
    private _password: string

    set salary(num: number) {
        // so'm  = tiyin * 100
        this._salary = num * 100;
    }

    get salary(): string {
        return this.salary
    }
}

const john = new Employee()
john.salary = 10
const salary = john.salary
console.log(salary)

/** getter va setterning afzalliklari:
 * 1. Encapsulation(Ma'lumotlarni yashirish)
 * 2. Validation (Tekshirish)
 * 3. Calculation(Hisoblash)
 * */

//getter va setter lar sync