import { describe, expect, it } from 'vitest';
import modalState from '../../modalState/ModalState';
import handleModalState from '../handleModalState';

describe('handle modal state', () => {
    it('should be false state of modal by defaumt', () => {
        expect(modalState.isOpen).toBeFalsy();
    });
    it('should change to false state of modal when is close ', () => {
        handleModalState.close();
        expect(modalState.isOpen).toBeFalsy();
    });
    it('should change to true state of modal when is open ', () => {
        handleModalState.open();
        expect(modalState.isOpen).toBeTruthy();
    });
});
