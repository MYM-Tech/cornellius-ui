import { expect, it } from 'vitest';
import setImageBackground from '../setImageBackground';

it('shoudl set the background url in a div', () => {
    const divTag = document.createElement('div');
    const constImgUrl = 'mym.fans/build/images/mym.e5c01898.svg';

    setImageBackground(divTag, constImgUrl);

    expect(divTag.style.backgroundImage).toBe("url('mym.fans/build/images/mym.e5c01898.svg')");
});
