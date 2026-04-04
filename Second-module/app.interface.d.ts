import type { Logger } from "./app.type";
export interface Person {
    readonly firstName: string;
    readonly lastName: string;
    role: string;
    logger: Logger;
}
export interface Employee {
    company: string;
    role: string;
}
export interface WorkerPerson extends Person, Employee {
    age: number;
}
//# sourceMappingURL=app.interface.d.ts.map