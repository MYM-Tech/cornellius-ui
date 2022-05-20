import { describe, expect, it } from 'vitest';
import handleCloseEscKey from '../handleCloseEscKey';
import modalState from '../../modalState/ModalState';
import handleModalState from '../handleModalState';

describe('handle modal state', () => {
    it('should change to false state of modal when exp key is press ', () => {
        handleModalState.open();
        expect(modalState.isOpen).toBe(true);

        document.onkeydown = (ev) => {
            handleCloseEscKey({ e: ev, observer: true });
        };

        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                charCode: 27,
            })
        );

        expect(modalState.isOpen).toBe(false);
    });
});
