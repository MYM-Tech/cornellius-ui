import { describe, expect, it } from 'vitest';
import setInitialValue from '../setInitialValue';

describe('testing set initial value on select input', () => {
    it('should return PM when the hours is more than 12 ', () => {
        const value = new Date('August 19, 1975 14:00:00');
        const result = setInitialValue(value);
        expect(result).toBe('PM');
    });

    it('should return AM when the hours is less than 12 ', () => {
        const value = new Date('August 19, 1975 8:00:00');
        const result = setInitialValue(value);
        expect(result).toBe('AM');
    });
});
