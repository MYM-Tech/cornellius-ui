import { Meta, StoryFn } from '@storybook/vue3';
import { readonly, ref, shallowReactive } from 'vue';
import { HandleModalState, Modal } from "./Modal"
import { ModalProps } from "./Modal.type"
import modalState from './state/ModalState';
import { modalStateType } from './state/ModalState.type';

export default {
    title: 'Feedback/Modal',
    component: Modal,
} as Meta;

const modalId = "modal1"
const Button = ({ id, title, callback }: { id: string, title: string, callback: () => void }) => {
    return (
        <button
            onClick={() => callback()}
        >
            {title}
        </button>
    )
}
const ModalContainer = ({ title, callback }) => {
    return (
        <>
            <p>{title}</p>
            <button onClick={() => { callback; console.log('click') }}>
                Close Modal
            </button>
        </>
    )
}

const Template: StoryFn<ModalProps> = (args) => {
    const firstModalState = ref<modalStateType>({
        isOpen: false,
        ref: modalId
    })
    const { toOpen, toClose } = HandleModalState(firstModalState.value)
    
    return <div>
        <Button callback={toOpen} id={modalId} title={'open modal'} />
        <Modal v-bind="args" id={modalId}>
            <ModalContainer title="this is an example of simple Modal" callback={toClose} />
        </Modal>
    </div>
}
    ;

export const modal = Template.bind({});
modal.args = {
    closeOnFocusOut: true,
    escKeyClose: false,
};



const doubleModal: StoryFn<{ Modal1: ModalProps, Modal2: ModalProps }> = (args) => {
    const firstModal = 'modal1',
        secondModal = 'modal3';

    const firstModalState = ref<modalStateType>({
        isOpen: false,
        ref: firstModal
    })
    const { toClose, toOpen } = HandleModalState(firstModalState.value)
    const handlerSecondModal = HandleModalState(modalState.value)

    return <div id="ContainerModal">
        <div>
            <Button id={firstModal} title={'open Modal 1'} callback={toOpen} />
            <Modal
                state={firstModalState.value}
                v-bind={args.Modal1}
                id={firstModal}
                v-slots={() => <ModalContainer title='example Modal 1' ref={firstModal} callback={toClose} />}
            />
            <br />
            <Button id={secondModal} title={'open Modal 2'} callback={handlerSecondModal.toOpen}/>
            <Modal 
                v-bind={args.Modal2} 
                id={secondModal}
                v-slots={()=>  <ModalContainer title='Example Modal 2' ref='modal3'  callback={handlerSecondModal.toClose}/>}
            />
        </div>
    </div>
};

export const Doublemodal = doubleModal.bind({});
Doublemodal.args = {
    Moda1: {
        closeOnFocusOut: true,
        escKeyClose: false,
    },
    Modal2: {
        closeOnFocusOut: true,
        escKeyClose: false,
    }

};