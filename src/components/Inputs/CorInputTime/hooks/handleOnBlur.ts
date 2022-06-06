import setNewValueDate from './setNewValueDate';

function handleOnBlur(
    event: FocusEvent,
    formatTime: string,
    value: Date,
    type: 'hours' | 'minutes' | 'seconds' | 'millisecond',
    maxTime: number,
    minTime: number,
    onBlurFunction?: (e: Event, newTime: Date) => void
) {
    if (!onBlurFunction) return;
    const target = event.target as HTMLInputElement;
    const cloneValue = value;
    setNewValueDate(type, cloneValue, target, formatTime, maxTime, minTime);
    onBlurFunction(event, cloneValue);
}

export default handleOnBlur;
