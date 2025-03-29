import { SMALL, MEDIUM, LARGE } from "./constants";

export type PatientType = {
    name: string;
    week1: number;
    week2: number;
    week3: number;
    week4: number;
    week5: number;
    charged: number;
}

enum size { SMALL, MEDIUM, LARGE };

export type Size = keyof typeof size;
