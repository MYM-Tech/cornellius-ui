import { ModalStateType } from './state/ModalState.type';

export interface CorModalProps {
    target?: string;
    id: string;
    class?: string;
    classContainer?: string;
    state: ModalStateType;
    open?: boolean;
    escKeyClose?: boolean;
    closeOnFocusOut?: boolean;
    onEnter?: (e: Element, done: () => void) => void;
    onLeave?: (e: Element, done: () => void) => void;
}

export type ModalContainerType = HTMLDivElement | null;
