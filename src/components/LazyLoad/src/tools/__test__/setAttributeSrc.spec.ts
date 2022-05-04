import { expect, it } from 'vitest';
import setAttributeSrc from '../setAttributeSrc';

it('should set the attribute src in image tag', () => {
    const imageTag = document.createElement('img');
    const imageUrl = 'https://mym.fans/build/images/mym.e5c01898.svg';
    setAttributeSrc(imageTag, imageUrl);

    expect(imageTag.src).toStrictEqual(imageUrl);
});
