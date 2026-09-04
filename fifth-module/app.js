"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(target, propertyKey, descriptor) {
    descriptor.value = function (...args) {
        console.log('Method not implemented');
        return args;
    };
}
function Auth(role) {
    return function (target, propertyKey, descriptor) {
        if (role !== 'admin') {
            throw new Error("Only admins can use this action");
        }
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (!this.isAdmin) {
                console.log('Access denied. You are not an admin!');
                return;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class User {
    name;
    age;
    isAdmin;
    constructor(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    greeting() {
        throw new Error('Method not implemented.');
    }
    deleteUser() {
        console.log('User is deleting...');
    }
}
__decorate([
    Logger
], User.prototype, "greeting", null);
__decorate([
    Auth('admin')
], User.prototype, "deleteUser", null);
const user = new User('Asilbek', 30, false);
user.greeting();
user.deleteUser();
//# sourceMappingURL=app.js.map