/*
function identityNumber<T>(arg: T): T {
    return arg
}

identityNumber<number>(5)
identityNumber<string>('Asil')*/

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

enum Roles {
    ADMIN=1,
    USER=2
}

type UserRoles = Record<string, number>;

const roles: UserRoles = {
    asil: Roles.ADMIN,
    john: Roles.USER,
}