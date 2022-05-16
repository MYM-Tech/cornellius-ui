import { cleanValue } from "./cleanValue";

export const formatValue = (value: string, decimals: number = 0, min?: number, max?: number): string => {
    const clean = cleanValue(value);
    const cleanSeparator = Number(parseFloat(clean.replace(',', '.')).toFixed(decimals));

    if (min && cleanSeparator < min)
        return `${min}`;
    
    if (max && cleanSeparator > max)
        return `${max}`;

    return `${cleanSeparator}`;
}