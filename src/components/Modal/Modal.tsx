import { FunctionalComponent, Teleport, Transition, ref, VNode } from "vue"
import CSS from "./Modal.module.scss"
import { ModalContainerType, ModalProps } from "./Modal.type"
import handleCloseEscKey  from "./hooks/handleCloseEscKey"
import handleModalState  from "./hooks/handleModalState"
import modalState  from "./state/ModalState"

const modalContainer = ref<ModalContainerType>(null)

const Modal: FunctionalComponent<ModalProps> = (
    {
        target="body",
        id ="",
        state = modalState.value,
        escKeyClose = false,
        closeOnFocusOut = false,
        open = false, 
        onEnter = (e, done) => null, 
        onLeave = (e, done) => null, 
    },
    { slots }
) => {
    state.ref = id
   const {toOpen, toClose } = handleModalState(state)
    if (state.isOpen) {
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
                    open || state.isOpen &&
                    <div
                        id='modal-background'
                        class={CSS.modal}
                    >
                        <div
                            tabindex="1"
                            class={CSS.modal__container}
                            ref={modalContainer}
                            onFocusout={() => closeOnFocusOut && toClose()}
                            onKeydown={(e) => { handleCloseEscKey({e:e, observer: escKeyClose,  callback: toClose})} }
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

