import { shallowReactive } from 'vue';
import { modalStateType } from './ModalState.type';

const modalState = shallowReactive<modalStateType>({
    isOpen: false,
});

export default modalState;
