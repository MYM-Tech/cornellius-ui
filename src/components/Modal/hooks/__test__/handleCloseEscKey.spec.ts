import { describe, expect, it } from 'vitest';
import handleCloseEscKey from '../handleCloseEscKey';
import modalState from '../../state/ModalState';
import handleModalState from '../handleModalState';

describe('handle modal state', () => {
    it('should change to false state of modal when exp key is press ', () => {
        const { toClose } = handleModalState(modalState.value);
        expect(modalState.value.isOpen).toBe(true);

        document.onkeydown = (ev) => {
            handleCloseEscKey({ e: ev, observer: true, callback: toClose });
        };

        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                charCode: 27,
            })
        );

        expect(modalState.value.isOpen).toBe(false);
    });
});
