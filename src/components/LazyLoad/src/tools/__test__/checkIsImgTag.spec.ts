import { describe, expect, it } from 'vitest';
import checkIsImgTag from '../checkIsImgTag';

describe('check img tag', () => {
    it('should return true if the tag is an img tag', () => {
        const imgTag = document.createElement('img');
        expect(checkIsImgTag(imgTag)).toBe(true);
    });
    it('should return false if the tag is not an img tag', () => {
        const imgTag = document.createElement('div');
        expect(checkIsImgTag(imgTag)).toBe(false);
    });
});
