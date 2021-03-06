import { describe, expect, it } from 'vitest';
import changeOnPressArrows from '../changeOnPressArrows';

describe('change value pressing arrow key', () => {
    it('should return 13h when we press on arrow up key', async () => {
        const value = new Date('August 19, 1975 12:00:00');
        const formatTime = 'HH';

        const inputElement = document.createElement('input');
        inputElement.value = `${value.getHours()}`;

        // eslint-disable-next-line no-use-before-define
        inputElement?.addEventListener('keydown', (ev: KeyboardEvent) => {
            changeOnPressArrows(ev, value, formatTime, 'hours', 23, 0, (e, v) => console.log(e, v));
        });

        inputElement.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                code: 'ArrowUp',
            })
        );

        expect(Number(inputElement.value)).toStrictEqual(13);
    });
    it('should return 11h when we press on arrow down key', async () => {
        const value = new Date('August 19, 1975 12:00:00');
        const formatTime = 'HH';

        const inputElement = document.createElement('input');
        inputElement.value = `${value.getHours()}`;

        inputElement?.addEventListener('keydown', (ev: KeyboardEvent) => {
            changeOnPressArrows(ev, value, formatTime, 'hours', 23, 0, (e, v) =>
                console.log(ev, v)
            );
        });

        inputElement.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                code: 'ArrowDown',
            })
        );

        expect(Number(inputElement.value)).toStrictEqual(11);
    });
});
