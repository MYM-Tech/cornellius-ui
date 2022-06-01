import { ModalStateType } from '../state/ModalState.type';

const handleModalState = (state: ModalStateType) => {
    function toOpen() {
        state.isOpen = true;
    }
    function toClose() {
        state.isOpen = false;
    }
    return { toOpen, toClose };
};

export default handleModalState;
