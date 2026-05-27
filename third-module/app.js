"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    _salary;
    _password;
    set salary(num) {
        // so'm  = tiyin * 100
        this._salary = num * 100;
    }
    get salary() {
        return this.salary;
    }
}
const john = new Employee();
john.salary = 10;
const salary = john.salary;
console.log(salary);
/** getter va setterning afzalliklari:
 * 1. Encapsulation(Ma'lumotlarni yashirish)
 * 2. Validation (Tekshirish)
 * 3. Calculation(Hisoblash)
 * */
//getter va setter lar sync
//# sourceMappingURL=app.js.map