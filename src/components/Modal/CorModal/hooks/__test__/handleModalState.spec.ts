import { describe, expect, it } from 'vitest';
import modalState from '../../state/ModalState';
import handleModalState from '../handleModalState';

describe('handle modal state', () => {
    it('should be false state of modal by defaumt', () => {
        expect(modalState.value.isOpen).toBeFalsy();
    });
    it('should change to false state of modal when is close ', () => {
        const { close } = handleModalState(modalState.value);
        close();
        expect(modalState.value.isOpen).toBeFalsy();
    });
    it('should change to true state of modal when is open ', () => {
        const { open } = handleModalState(modalState.value);
        open();
        expect(modalState.value.isOpen).toBeTruthy();
    });
});
