function handle12hValueDate(value: Date, hours: number, amPm: string) {
    if (amPm === 'PM') {
        value.setHours(hours + 12);
    }

    return value;
}

export default handle12hValueDate;
