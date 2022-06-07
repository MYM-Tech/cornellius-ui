/* eslint-disable no-unused-expressions */
function setInitialValue(value: Date) {
    const hours = value.getHours();
    if (hours > 12){
        return 'PM'
    }
    return 'AM'
}

export default setInitialValue;
