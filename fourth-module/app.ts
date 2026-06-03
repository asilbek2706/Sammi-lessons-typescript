/*
//typeof
const user = {
    name: 'John',
    age: 20,
    isMarried: false,
}

type TypeUser = typeof user

function logUser(user: TypeUser) {
    console.log(user)
}

logUser(user)

//keyof
type TUser = {
    name: string
    age: number
    isMarried: boolean
}

type UserKeys = keyof TUser

function getUserKeys(key: UserKeys) {
    console.log(key)
}

// getUserKeys('age')

function getProperty<T, K extends keyof T>(obj: T, key: K):T[K] {
    return obj[key]
}

const car = {
    name: 'John',
    age: 20,
}

const userName = getProperty(car, 'name')


*/

/*const user = {
    name: 'John',
    age: 25,
}

type UserKeys = keyof typeof user*/

/**
 * typeof - qiymatning tipini aniqlash - type T = typeof obj
 * keyof - tipning ichidagi propertylarni aniqlash - typeT = keyof SameType
 * keyof typeof - qiymat ichidagi propertilarni aniqlash - type T = keyof typeof obj
 */

const config = {
    apiUrl: 'http://localhost:8080',
    port: 8080,
    debug: true,
}

type ConfigKeys = keyof typeof config

function getConfigValue(key: ConfigKeys){
    return config[key];
}

console.log(getConfigValue('port'))
console.log(getConfigValue('apiUrl'))
