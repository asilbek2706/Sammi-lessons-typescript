export type Person = {
    firstName: string,
    lastName: string,
    age: number,
    skills: string[],
}

export type Logger = (message: string) => string;

export type IPerson = {
    firstName: string,
    lastName: string,
}

export type Employee = {
    company: string,
    role: string,
}

export type CompanyWorker = IPerson & Employee
