/*
interface Box<T> {
    value: T
}

const stringBox: Box<string> = { value: 'Hello' }
const numberBox: Box<number> = { value: 42 }
*/

/*type Pair<T, U> = [T, U]

const pair1: Pair<string, number> = ['Hello', 1]
const pair2: Pair<number, string> = [2, 'World']*/

/*interface IUser<T> {
    name: T
    showInfo(value: T): void
}

const user1: IUser<string> = {
    name: 'Asilbek',
    showInfo(value) {
        console.log(`Name: ${value}`)
    },
}

user1.showInfo(user1.name)*/

/*interface IUser<T, U> {
    name: T
    showAge: (age: U) => void
}

const user1: IUser<string, number> = {
    name: 'Asilbek',
    showAge(age) {
        console.log(`Name: ${this.name}, Age: ${age}`)
    },
}

user1.showAge(25)*/

/*// Constraints - cheklovlar
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength('Hello World!'))
console.log(getLength([1, 2, 3, 4, 5]))
console.log(getLength({length: 12}))*/

/*function getProperty<T, K extends keyof T>(obj:T, key:K) {
    return obj[key];
}

const user = {
    id: 1,
    name: "John",
    email: 'asli@mail.ru',
}

const userName = getProperty(user, "name");
const userEmail = getProperty(user, "email");
console.log(userName);
console.log(userEmail);*/

interface HasId {
    id?: number
}

interface HasUniqueId {
    _id?: number
}

const user = {
    id: 1,
    name: 'John',
}

const product = {
    id: 2,
    name: 'apple',
}

const course = {
    _id: 3,
    name: 'angular'
}

function getById<T extends HasId & HasUniqueId>(obj: T): number {
    if(obj.id) {
        return obj.id
    } else if(obj._id) return obj._id
}

const userId = getById(user)
const productId= getById(product)
const courseId = getById(course)
console.log(userId)
console.log(productId)
console.log(courseId)
