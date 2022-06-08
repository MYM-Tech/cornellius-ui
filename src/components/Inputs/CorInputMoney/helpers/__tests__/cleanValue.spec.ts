import { describe, expect, it } from 'vitest';
import cleanValue from '../cleanValue';

describe('cleanValue', () => {
    it('should return value without any letters or symbols', () => {
        const value = cleanValue('aaaa10aaaaa');

        expect(value).toEqual('10');
    });

    it('should return value without only numbers and commas', () => {
        const value = cleanValue('aaaa10,45aaaaa');

        expect(value).toEqual('10,45');
    });

    it('should return value without only numbers and dots', () => {
        const value = cleanValue('aaaa10.45aaaaa');

        expect(value).toEqual('10.45');
    });
});
