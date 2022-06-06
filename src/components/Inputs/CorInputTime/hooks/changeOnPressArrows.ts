import setNewValueDate from './setNewValueDate';

function changeOnPressArrows(
    e: KeyboardEvent,
    value: Date,
    formatTime: string,
    type: 'hours' | 'minutes' | 'seconds' | 'millisecond',
    maxTime: number,
    minTime: number,
    onKeydownFunction: (event: KeyboardEvent, newTime: Date) => void
) {
    const target = e.target as HTMLInputElement;
    let newValue = Number(target.value);
    if (e.key === 'ArrowUp') {
        newValue = Number(target.value) + 1;
    }
    if (e.key === 'ArrowDown') {
        newValue = Number(target.value) - 1;
    }

    target.value = `${newValue}`;
    const cloneValue = setNewValueDate(type, value, target, formatTime, maxTime, minTime);
    onKeydownFunction(e, cloneValue);
}

export default changeOnPressArrows;
