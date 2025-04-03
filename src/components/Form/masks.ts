import { Masks } from "../../utils/types";

export const currencyMask = (value: string): string => {
    let safeValue = value.replace(/[^0-9-]/g, '');
    if (safeValue.startsWith('0')) safeValue = safeValue.slice(1);

    let safeNumber = Number(safeValue);
    
    if (!safeNumber) return 'R$ 0,00';

    safeNumber = safeNumber / 100;
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(safeNumber);
}

export const applyMask = (value: string, mask: Masks): string => {
    switch(mask) {
        case "currency":
            return currencyMask(value);
        case "phone":
            return value;
        case "email":
            return value;
        case "none":
            return value;
        default:
            return value;
    }
}
