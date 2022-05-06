/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mergeValues(
    defaultValue: { [key: string]: any },
    newValue: { [key: string]: any }
) {
    Object.keys(newValue).forEach((key) => {
        defaultValue[key] = newValue[key];
    });
    return defaultValue;
}
