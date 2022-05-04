import { expect, it } from 'vitest';

import { baseConfig, ObserverOptionsDafault } from '../../config/config';
import mergeValues from '../mergeValue';

it('should return a object with the new props', () => {
    const defaultValue = baseConfig;
    const newValue = {
        errorImageUrl: 'https://mym.fans/build/images/mym.e5c01898.svg',
        loadingImageUrl: 'https://mym.fans/build/images/mym.e5c01898.svg',
    };
    const propsMerged = mergeValues(defaultValue, newValue);

    const expectedResult = {
        errorImageUrl: 'https://mym.fans/build/images/mym.e5c01898.svg',
        loadingImageUrl: 'https://mym.fans/build/images/mym.e5c01898.svg',
        errorClasses: [],
        loadingClasses: [],
        loadedClasses: [],
        onError: undefined,
        onLoad: undefined,
        watchUpdate: true,
        observerOptions: ObserverOptionsDafault,
        lifecycle: {},
    };

    expect(propsMerged).toStrictEqual(expectedResult);
});
