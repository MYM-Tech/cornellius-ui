import { ref } from 'vue';
import { modalStateType } from './ModalState.type';

const modalState = ref<modalStateType>({
    isOpen: false,
    ref: '',
});

export default modalState;
