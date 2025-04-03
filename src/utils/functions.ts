export const getNumberFromCurrencyString = (str: string): number => {
    const safeStr = str.replace(/[^0-9-]/g, '');

    let num = Number(safeStr);
    if (num) num = num / 100;

    return num;
}

