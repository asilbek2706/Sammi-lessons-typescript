// Pick <T, K> - Asosiy tipdan faqat kerakli propertilarni tanab oladi
// Omit <T, K> - Asosiy tipdan kerakli propertilarni olib tawlaydi
//Extract <T, U> - ikkita tip orasida umumiy propertilarni tanlab olish uchun
// Exclude <T, U> - bitta tipdan ikkinchi tipdagi propertilarni olib tawlaydi
// Readonly <T> - Asosiy tipni oqiladigan qilib olish uchun
// Partial <T> - Asosiy tipni toliq yoki qisman toldirish uchun
// Required <T> - Asosiy tipni toliq yoki qisman toldirish uchun

//ReturnType <T> - Funksiyadan qaytgan qiymatning tipini olish uchun
// Parameters <T> - Funksiyadan parameter tipini olish uchun
// ConstructorParameters <T> - Clasdsan constructor parameterlarining tipini olish
// Awaited <T> - Promise qaytaradigan funksiyadan qaytgan qiymatning tipini olish

/*
function calc(a: number, b: number): number {
    return a + b
}

type calcParams = Parameters<typeof calc>
type CalcType = ReturnType<typeof calc>

const params: calcParams = [1, 2]
// const result: CalcType = calc(5, 8)
const result: CalcType = calc(...params)
console.log(result)
*/

/*
class Person{
    constructor(public name: string, public age: number){}
}

type PersonParams = ConstructorParameters<typeof Person>

const personParams: PersonParams = ['John', 30]
const person = new Person(...personParams)
console.log(person)*/

async function fetchDaata(): Promise<string> {
    return 'Data'
}

type FetchDataReturnType = Awaited<ReturnType<typeof fetchDaata>>
