/* eslint-disable no-param-reassign */

import { limitedHoursValue, limitedTimeValue } from './limitedValue';

function setNewValueDate(
    type: string,
    cloneValue: Date,
    target: HTMLInputElement,
    formatTime: string,
    maxTime: number,
    minTime: number
) {
    const numberValue = limitedTimeValue(parseInt(target.value, 10), maxTime, minTime);
    switch (type) {
        case 'millisecond':
            cloneValue.setHours(0, 0, 0, numberValue);
            target.value = `${cloneValue.getMilliseconds()}`;
            return cloneValue;
            break;
        case 'seconds':
            cloneValue.setHours(0, 0, numberValue, 0);
            target.value = `${cloneValue.getSeconds()}`;
            return cloneValue;
            break;
        case 'minutes':
            cloneValue.setHours(0, numberValue, 0, 0);
            target.value = `${cloneValue.getMinutes()}`;
            return cloneValue;
            break;
        default:
            cloneValue.setHours(
                limitedHoursValue(parseInt(target.value, 10), formatTime, maxTime, minTime),
                0,
                0,
                0
            );
            target.value = `${cloneValue.getHours()}`;
            return cloneValue;
            break;
    }
}
export default setNewValueDate;
