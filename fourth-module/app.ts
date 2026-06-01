/*
function identuty<T, U>(val1: T, val2: U):[T, U] {
    return [val1, val2];
}

const stringIdentity = identuty<string, number>('Hello', 5)
const numberIdentity = identuty<number, string>(5, 'Hello')
const booleanIdentity = identuty<boolean, number>(true, 5)*/

/*
interface Name {
    name: string
}

interface Age {
    age: number
}

interface Married {
    isMarried: boolean
}

function merge<T, U, K>(obj1: T, obj2: U, obj3: K): T & U & K {
    return { ...obj1, ...obj2, ...obj3 }
}

const user = merge<Name, Age, Married>(
    {name:'Asilbek'},
    {age: 20},
    {isMarried: false}
)*/

/*
interface IUser {
    name: string
}

function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

const firstNumber = getFirstElement<number>([1, 2, 3])
const firstString = getFirstElement<string>(['a', 'b', 'c', 'd'])
const firstUser = getFirstElement<IUser>([{ name: 'John' }, { name: 'Ali' }])

console.log(firstUser)*/

interface Shape<T> {
    radius: T
}

function createShape<T = number>(val: T): Shape<T> {
    return { radius: val }
}

const firstShape = createShape(10)
const secondShape = createShape<string>('10deg')

console.log(firstShape)
console.log(secondShape)
