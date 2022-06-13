import setNewValueDate from './setNewValueDate';

function handleOnChange(
    event: Event,
    formatTime: string,
    value: Date,
    type: 'hours' | 'minutes' | 'seconds' | 'milliseconds',
    maxTime: number,
    minTime: number,
    onChangeFunction?: (e: Event, newTime: Date) => void
) {
    if (!onChangeFunction) return;

    const target = event.target as HTMLInputElement;
    const cloneValue = value;
    setNewValueDate(type, cloneValue, target, formatTime, maxTime, minTime);
    onChangeFunction(event, cloneValue);
}

export default handleOnChange;
