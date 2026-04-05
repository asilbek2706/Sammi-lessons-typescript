export enum Role {
    ADMIN,
    STUDENT
}

export interface IUser{
    id: number;
    name: string;
    role: Role;
}
