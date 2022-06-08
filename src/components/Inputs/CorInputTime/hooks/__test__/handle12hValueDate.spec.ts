import { describe, expect, it } from 'vitest';
import handle12hValueDate from '../handle12hValueDate';

describe('test handle 12h value date when select PM ', () => {
    it('return new date with value above half day', () => {
        const value = new Date('August 19, 1975 12:00:00');
        const hours = 4;

        const result = handle12hValueDate(value, hours, 'PM');

        expect(result.getHours()).toBe(16);
    });
});
