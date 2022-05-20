import { FunctionalComponent, Teleport, Transition, ref } from "vue"
import CSS from "./Modal.module.scss"
import { ModalContainerType, ModalProps } from "./Modal.type"
import handleCloseEscKey  from "./modalHooks/handleCloseEscKey"
import handleModalState  from "./modalHooks/handleModalState"
import modalState  from "./modalState/ModalState"

const modalContainer = ref<ModalContainerType>(null)

const Modal: FunctionalComponent<ModalProps> = (
    {
        target,
        escKeyClose = false,
        closeOnFocusOut = false,
        open = modalState.isOpen, 
        onEnter, 
        onLeave,
    },
    { slots }
) => {
    if (modalState.isOpen) {
        if (modalContainer.value !== null) {
            modalContainer?.value?.focus()
        }
    }

    return (
        <Teleport to={target}>
            <Transition 
                name="modal" 
                onEnter={(e, done)=>onEnter(e, done)}
                onLeave={(e, done)=>onLeave(e, done)}
                enterFromClass={CSS.modalEnterFrom}
                enterToClass={CSS.modalEnterTo}
                leaveToClass={CSS.modalLeaveTo}
                appear>
                {
                    open &&
                    <div
                        id='modal-background'
                        class={CSS.modal}
                    >
                        <div
                            tabindex="1"
                            class={CSS.modal__container}
                            ref={modalContainer}
                            onFocusout={() => closeOnFocusOut && handleModalState.close}
                            onKeydown={(e) => { handleCloseEscKey({e:e, observer: escKeyClose})} }
                        >
                            {slots.default && slots.default()}
                        </div>
                    </div>
                }

            </Transition>
        </Teleport>
    )
}

export  { handleModalState as HandleModalState, Modal}

