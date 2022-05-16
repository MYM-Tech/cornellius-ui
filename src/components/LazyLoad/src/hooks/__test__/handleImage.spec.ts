import { describe, expect, it } from 'vitest';
import handleImage from '../handleImage';

describe('handle Image test', () => {
    it('should return new src in an img tag', () => {
        const imgTag = document.createElement('img');
        const src = 'https://mym.fans/build/images/mym.e5c01898.svg';
        const errorUrl = 'https://mym.fans/build/images/mym.e5c01898.svg';
        const lifecycle = {};
        handleImage(imgTag, src, errorUrl, lifecycle);
        expect(imgTag.src).toBe(src);
    });
});
