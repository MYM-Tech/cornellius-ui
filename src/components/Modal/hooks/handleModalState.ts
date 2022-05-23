import { modalStateType } from '../state/ModalState.type';

const handleModalState = (state: modalStateType) => {
    function toOpen() {
        state.isOpen = true;
    }
    function toClose() {
        state.isOpen = false;
    }
    return { toOpen, toClose };
};

export default handleModalState;
