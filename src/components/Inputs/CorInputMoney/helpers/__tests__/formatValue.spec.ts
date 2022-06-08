import { describe, expect, it } from 'vitest';
import formatValue from '../formatValue';

describe('formatValue', () => {
    it('should return value without decimals when decimals is not set', () => {
        const value = formatValue('10,45');

        expect(value).toEqual('10');
    });

    it('should return value without specified number of decimals', () => {
        const value = formatValue('10,45', 1);

        expect(value).toEqual('10.4');
    });

    it('should return max possible value when value is too high', () => {
        const value = formatValue('10,45', 2, 0, 10);

        expect(value).toEqual('10');
    });

    it('should return min possible value when value is too low', () => {
        const value = formatValue('1.50', 2, 2, 10);

        expect(value).toEqual('2');
    });
});
