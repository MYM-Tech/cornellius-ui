/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mergeValues(
    defaultValue: { [key: string]: any },
    newValue: { [key: string]: any }
) {
    if (defaultValue && newValue)
        Object.keys(newValue).forEach((key) => {
            defaultValue[key] = newValue[key];
        });
}
