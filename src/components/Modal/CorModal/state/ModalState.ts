import { ref } from 'vue';
import { ModalStateType } from './ModalState.type';

const modalState = ref<ModalStateType>({
    isOpen: false,
    ref: '',
});

export default modalState;
