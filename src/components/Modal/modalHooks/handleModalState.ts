import modalState from '../modalState/ModalState';

const handleModalState = {
    open() {
        modalState.isOpen = true;
    },
    close() {
        modalState.isOpen = false;
    },
};

export default handleModalState;
