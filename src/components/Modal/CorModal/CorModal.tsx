import classNames from 'classnames';
import { FunctionalComponent, Teleport, Transition, ref } from 'vue';
import CSS from './CorModal.module.scss';
import { ModalContainerType, CorModalProps } from './CorModal.type';
import handleCloseEscKey from './hooks/handleCloseEscKey';
import handleModalState from './hooks/handleModalState';

const modalContainer = ref<ModalContainerType>(null);

const CorModal: FunctionalComponent<CorModalProps> = (
    {
        target = 'body',
        id = '',
        state,
        escKeyClose = false,
        closeOnFocusOut = false,
        open = false,
        onEnter = () => null,
        onLeave = () => null,
        ...props
    },
    { slots }
) => {
    state.ref = id;
    const { close } = handleModalState(state);
    if (state.isOpen) {
        if (modalContainer.value !== null) {
            modalContainer.value.focus();
        }
    }
    const leavingModal = (e: Element, done: () => void) => {
        if (!done) {
            done = () => null;
            done();
        }

        onLeave(e, done);
    };

    const classes = classNames(CSS.modal, {
        [props.class as string]: !!props.class,
    });

    const classesContainer = classNames(CSS.modal__container, {
        [props.classContainer as string]: !!props.classContainer,
    });

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
                    <div id="modal-background" class={classes}>
                        <div
                            tabindex="1"
                            class={classesContainer}
                            ref={modalContainer}
                            onFocusout={(e) => {
                                const leavingParent = !(e.currentTarget as Node)?.contains(
                                    e.relatedTarget as Node
                                );
                                if (leavingParent && closeOnFocusOut) close();
                            }}
                            onKeydown={(e) => {
                                handleCloseEscKey({
                                    e,
                                    observer: escKeyClose,
                                    callback: close,
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

export { handleModalState, CorModal };
