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

export function limitedTimeValue(v: number, max: number, minTime: number) {
    if (v < 10) {
        return v;
    }

    if (v < minTime || Number.isNaN(v)) {
        return minTime;
    }

    if (v > max) {
        return minTime;
    }

    return v;
}

export function limitedHoursValue(
    v: number,
    formatTime: string,
    maxTime: number,
    minTime: number
): number {
    const { has12H } = parsingTypeFormat(formatTime);
    if (has12H && maxTime > 12) {
        /* 
            we subtract 12 of the maxTime to have a rigth value in format 12h
            exp:  15 - 12 = 3pm
        */
        if (minTime > 12) limitedTimeValue(v, maxTime - 12, minTime - 12);
        return limitedTimeValue(v, maxTime - 12, minTime);
    }

    return limitedTimeValue(v, maxTime, minTime);
}
