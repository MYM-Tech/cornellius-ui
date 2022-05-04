import { expect, it } from 'vitest';
import parsingConfiguration from '../parsingConfiguration';

it('should return object of data after parsing default values', () => {
    const value = 'https://mym.fans/build/images/mym.e5c01898.svg';
    const { src, errorUrl, loadingUrl, lifecycle } = parsingConfiguration(value);

    expect(src).toStrictEqual(value);
    expect(errorUrl && loadingUrl).toBe('');
    expect(lifecycle).toStrictEqual({});
});
