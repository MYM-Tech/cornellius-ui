import { ModalStateType } from '../state/ModalState.type';

const handleModalState = (state: ModalStateType) => {
    function open() {
        state.isOpen = true;
    }
    function close() {
        state.isOpen = false;
    }
    return { open, close };
};

export default handleModalState;
