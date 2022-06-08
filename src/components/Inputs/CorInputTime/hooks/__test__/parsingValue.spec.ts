import { describe, expect, it } from 'vitest';
import { parsingTypeFormat, parsingValue } from '../parsingValue';

describe('tesgint parsing value script', () => {
    it('shoudl return true if seconds is available', () => {
        const formatType = 'hh:mm:ss';
        const { hasSeconds } = parsingTypeFormat(formatType);

        expect(hasSeconds).toBeTruthy();
    });

    it('shoudl return false if the format is 24 h', () => {
        const formatType = 'hh:mm:ss';
        const { has12H } = parsingTypeFormat(formatType);

        expect(has12H).toBeFalsy();
    });

    it('shoudl return true if milliseconds is available', () => {
        const formatType = 'hh:mm:ss:S';
        const { hasMilliseconds } = parsingTypeFormat(formatType);

        expect(hasMilliseconds).toBeTruthy();
    });

    it('shoudl return false if milliseconds is not available', () => {
        const formatType = 'hh:mm:ss:';
        const { hasMilliseconds } = parsingTypeFormat(formatType);

        expect(hasMilliseconds).toBeFalsy();
    });

    it('shoudl return the good number of hours when we pass a date', () => {
        const value = new Date('August 19, 1975 15:00:00');
        const format12 = true;
        const getHours = parsingValue.hours(value, format12);

        expect(getHours).toBe(3);
    });

    it('shoudl return the good number of hours when we pass a date and the time format', () => {
        const value = new Date('August 19, 1975 15:00:00');
        const format12 = false;
        const getHours = parsingValue.hours(value, format12);

        expect(getHours).toBe(15);
    });

    it('shoudl return the good number of minutes when we pass and date', () => {
        const value = new Date('August 19, 1975 15:30:00');
        const getHours = parsingValue.minutes(value);

        expect(getHours).toBe(30);
    });

    it('shoudl return the good number of seconds when we pass and date', () => {
        const value = new Date('August 19, 1975 15:30:45');
        const getHours = parsingValue.seconds(value);

        expect(getHours).toBe(45);
    });

    it('shoudl return the good number of milliseconds when we pass and date', () => {
        const value = new Date('August 19, 1975 15:30:45:12');
        const getHours = parsingValue.milliseconds(value);

        expect(getHours).toBe(12);
    });
});
