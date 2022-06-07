export function parsingTypeFormat(formatType: string) {
    const has12H = formatType.split(':')[0] === 'h';
    const hasSeconds = formatType.split(':')[2] === 'ss';
    const hasMilliseconds = formatType.split(':')[3] === 'S';
    return { has12H, hasSeconds, hasMilliseconds };
}

export const parsingValue = {
    hours: (value: Date, has12hFormat: boolean): number =>
        has12hFormat ? (value.getHours() + 24) % 12 || 12 : value.getHours(),
    minutes: (value: Date) => value.getMinutes(),
    seconds: (value: Date) => value.getSeconds(),
    milliseconds: (value: Date) => value.getMilliseconds(),
};
