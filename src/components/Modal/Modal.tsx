import { FunctionalComponent, Teleport, Transition, ref } from 'vue';
import CSS from './Modal.module.scss';
import { ModalContainerType, ModalProps } from './Modal.type';
import handleCloseEscKey from './hooks/handleCloseEscKey';
import handleModalState from './hooks/handleModalState';

const modalContainer = ref<ModalContainerType>(null);

const Modal: FunctionalComponent<ModalProps> = (
    {
        target = 'body',
        id = '',
        state,
        escKeyClose = false,
        closeOnFocusOut = false,
        open = false,
        onEnter = (e, done) => null,
        onLeave = (e, done) => null,
    },
    { slots }
) => {
    state.ref = id;
    const { toClose } = handleModalState(state);
    if (state.isOpen) {
        if (modalContainer.value !== null) {
            modalContainer?.value?.focus();
        }
    }
    const leavingModal = (e: Element, done: () => void) => {
        if (!done) {
            done = () => null;
            done();
        }

        onLeave(e, done);
    };

    return (
        <Teleport to={target}>
            <Transition
                name="modal"
                onEnter={(e, done) => onEnter(e, done)}
                onLeave={leavingModal}
                enterFromClass={CSS.modalEnterFrom}
                enterToClass={CSS.modalEnterTo}
                leaveToClass={CSS.modalLeaveTo}
                appear
                persisted
            >
                {(open || state.isOpen) && (
                    <div id="modal-background" class={CSS.modal}>
                        <div
                            tabindex="1"
                            class={CSS.modal__container}
                            ref={modalContainer}
                            onFocusout={() => closeOnFocusOut && toClose()}
                            onKeydown={(e) => {
                                handleCloseEscKey({
                                    e,
                                    observer: escKeyClose,
                                    callback: toClose,
                                });
                            }}
                        >
                            {slots.default && slots.default()}
                        </div>
                    </div>
                )}
            </Transition>
        </Teleport>
    );
};

export { handleModalState as HandleModalState, Modal };
