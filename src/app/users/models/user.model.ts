import { Injectable } from "@angular/core";

export interface IUser {
    id: number;
    name: string;
    phone: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})

export class User implements IUser{
    id: number = 0;
    name: string = '';
    phone: string = '';
    email: string = '';
}