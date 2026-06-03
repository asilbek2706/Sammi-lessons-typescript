/*
const user = {
    id: 1,
    name: 'Ali',
    age: 20,
    isMarried: true
}

// type UserName = User['name' | 'isMarried'];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}

const userName = getProperty(user, 'name');
const userAge = getProperty(user, 'age');*/

/*//T extends U ? X : Y
type IsBoolean<T> = T extends boolean ? 'yes' : 'no'
type A = IsBoolean<boolean>
type B = IsBoolean<string>*/

/*
interface IAdmin {
    role: 'admin'
    access: true
}

interface IGuest {
    role: 'guest'
    access: false
}

type RoleAccess<T> = T extends {role: 'admin'} ? true : false

type AdminAccess = RoleAccess<IAdmin>
type GuestAccess = RoleAccess<IGuest>*/

type GetPropType<T, K extends keyof T> = T[K]

type User = { name: string; age: number }
type NameType = GetPropType<User, 'name'>
type AgeType = GetPropType<User, 'age'>
