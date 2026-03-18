const person = {
    firstName: "Asilbek", // required
    lastName: "Karomatov", //required
    city: "Bukhara",
    skills: {
        programming: "typescript",
        design: "Figma",
    }
}

function getName(data: { firstName: string; lastName: string }): string {
    return `${data.firstName} ${data.lastName}`;
}

const person1 = getName(person)
console.log(person1)
/*
function getName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

const checkAdult = (age: number): boolean => {
    return age >= 18;
}

const age1 = checkAdult(19)
console.log(age1)

const person1 = getName("Asilbek", "Karomatov")
console.log(person1)

// void = hech narsa qaytarmaydi*/
