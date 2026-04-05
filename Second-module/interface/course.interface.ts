import type {IUser} from "./user.interface";

export interface ICourse{
    id: number;
    title: string;
    description: string;
    students: IUser[];
}