"use strict";
/*
function identityNumber<T>(arg: T): T {
    return arg
}

identityNumber<number>(5)
identityNumber<string>('Asil')*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
const numbers: Array<number> = [1, 2, 3, 4, 5]

interface IUser{
    name: string;
    age: number;
}

const users: Array<IUser & {isMarried: boolean}> = [
    {name: "John", age: 15, isMarried: false},
    {name: "John", age: 23, isMarried: true},
]*/
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const roles = {
    asil: Roles.ADMIN,
    john: Roles.USER,
};
//# sourceMappingURL=app.js.map