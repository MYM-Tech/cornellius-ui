const cleanValue = (value: string) => value.replace(/[^{0-9|,.}]/g, '');

export default cleanValue;
