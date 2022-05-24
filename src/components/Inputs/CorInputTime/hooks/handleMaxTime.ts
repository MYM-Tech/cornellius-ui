const handleMaxTime = (v: number, max: number) => {
    if (v < 10) {
        return `0${v}`;
    }

    if (v < 0 || Number.isNaN(v)) {
        return '00';
    }

    if (v > max) {
        return `${max}`;
    }

    return `${v}`;
};

export default handleMaxTime