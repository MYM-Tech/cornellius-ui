import cleanValue from './cleanValue';

const formatValue = (value: string, decimals?: number, min?: number, max?: number): string => {
    const clean = cleanValue(value);
    const cleanSeparator = Number(parseFloat(clean.replace(',', '.')).toFixed(decimals));

    if (min && cleanSeparator < min) return `${min}`;

    if (max && cleanSeparator > max) return `${max}`;

    return `${cleanSeparator}`;
};

export default formatValue;
