export interface ModalProps {
    target: string;
    open?: boolean;
    escKeyClose?: boolean;
    closeOnFocusOut?: boolean;
    onEnter: (e: Element, done: () => void) => void;
    onLeave: (e: Element, done: () => void) => void;
}

export type ModalContainerType = HTMLDivElement | null;
