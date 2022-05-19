import { FunctionalComponent, shallowReactive, Teleport, Transition, onMounted, ref } from "vue"
import CSS from "./Modal.module.scss"

export const modalState = shallowReactive({
    isOpen: false
})

export const handleModalState = {
    open() {
        modalState.isOpen = true

    },
    close() {
        modalState.isOpen = false
    }
}

const closeModalWithEscKey = (e: KeyboardEvent, observer: boolean) => {
    if (e.key === 'Escape' && observer) handleModalState.close();
}

const modalContainer = ref<HTMLDivElement | null>(null)


export const Modal: FunctionalComponent<{ target: string, open: boolean, escKeyClose: boolean }> = (
    {
        escKeyClose = false,
        target,
        open = modalState
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
            <Transition>
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
                            onFocusout={handleModalState.close}
                            onKeydown={(e) => {closeModalWithEscKey(e, escKeyClose)}}
                        >
                            {slots.default && slots.default()}
                        </div>
                    </div>
                }

            </Transition>
        </Teleport>
    )
}

