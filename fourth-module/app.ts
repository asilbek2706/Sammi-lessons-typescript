// Pick <T, K> - Asosiy tipdan faqat kerakli propertilarni tanab oladi
// Omit <T, K> - Asosiy tipdan kerakli propertilarni olib tawlaydi
//Extract <T, U> - ikkita tip orasida umumiy propertilarni tanlab olish uchun
// Exclude <T, U> - bitta tipdan ikkinchi tipdagi propertilarni olib tawlaydi

// interface IAnimal{
//     name: string;
//     species: string;
//     age: number;
// }
//
// interface IPlant{
//     name: string;
//     color: string;
//     age: number;
// }
//
// // type CommonProperties = Extract<keyof IAnimal, keyof IPlant>
// type CommonProperties = Exclude<keyof IPlant, keyof IAnimal>

/*interface IUser {
    name: string
    age: number
    address: string
    email: string
    avatar: string
    phone: string
    password: string
    secretKey: string
}

// type UserContactInfo = Pick<IUser, 'email' | 'address' | 'name' | 'age'>
type UserContactInfo = Omit<IUser, 'password' | 'secretKey'>

const contact: UserContactInfo = {
    address: 'wjhdn',
    age: 22,
    name: 'skncms ',
    email: 'skncms.com',
    phone: '38574853i',
    avatar: 'https://avatars2.githubusercontent.com/u/64?v=4',
}*/
