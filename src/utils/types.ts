import { SMALL, MEDIUM, LARGE } from "./constants";

export type PatientType = {
    name: string;
    week1: string;
    week2: string;
    week3: string;
    week4: string;
    week5: string;
    charged: number;
}

enum size { SMALL, MEDIUM, LARGE };

export type Size = keyof typeof size;

enum masks { 'currency', 'phone', 'email', 'none' };

export type Masks =  keyof typeof masks;
