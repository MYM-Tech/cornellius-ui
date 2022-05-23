import { modalStateType } from './state/ModalState.type';

export interface ModalProps {
    target?: string;
    id: string;
    state?: modalStateType;
    open?: boolean;
    escKeyClose?: boolean;
    closeOnFocusOut?: boolean;
    onEnter?: (e: Element, done: () => void) => void;
    onLeave?: (e: Element, done: () => void) => void;
}

export type ModalContainerType = HTMLDivElement | null;
