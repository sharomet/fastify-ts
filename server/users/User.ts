import { Document } from 'mongoose'

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: number;
    updated_at: Date;
    created_at: Date;
}