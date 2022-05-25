import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { HandleModalState, Modal } from './Modal';
import { ModalProps } from './Modal.type';
import modalState from './state/ModalState';
import { modalStateType } from './state/ModalState.type';

export default {
    title: 'Feedback/Modal',
    component: Modal,
} as Meta;

const Button = ({ title, callback }: { title: string; callback: () => void }) => (
    <button onClick={() => callback()}>{title}</button>
);
const ModalContainer = ({ title, callback }) => (
    <>
        <p>{title}</p>
        <button onClick={callback}>Close Modal</button>
    </>
);

const Template: StoryFn<ModalProps> = (args) => {
    const modalId = 'modal1';
    const firstModal = ref({
        isOpen: false,
        ref: modalId,
    });

    const handlerOpen = HandleModalState(firstModal.value);
    console.log(firstModal.value);

    return (
        <div>
            <Button callback={() => handlerOpen.toOpen()} title={'open modal'} />
            <Modal v-bind={args} id={modalId} state={firstModal.value}>
                <ModalContainer
                    title="this is an example of simple Modal"
                    callback={() => handlerOpen.toClose()}
                />
            </Modal>
        </div>
    );
};
export const ModalStory = Template.bind({});
ModalStory.args = {
    closeOnFocusOut: true,
    escKeyClose: false,
};

const doubleModal: StoryFn<{ Modal1: ModalProps; Modal2: ModalProps }> = (args) => {
    const firstModal = 'modal1';
    const secondModal = 'modal3';

    const firstModalState = ref<modalStateType>({
        isOpen: false,
        ref: firstModal,
    });
    const { toClose, toOpen } = HandleModalState(firstModalState.value);
    const handlerSecondModal = HandleModalState(modalState.value);

    return (
        <div id="ContainerModal">
            <div>
                <Button title={'open Modal 1'} callback={toOpen} />
                <Modal
                    state={firstModalState.value}
                    v-bind={args.Modal1}
                    id={firstModal}
                    v-slots={() => (
                        <ModalContainer
                            title="example Modal 1"
                            ref={firstModal}
                            callback={toClose}
                        />
                    )}
                />
                <br />
                <Button title={'open Modal 2'} callback={handlerSecondModal.toOpen} />
                <Modal
                    state={modalState.value}
                    v-bind={args.Modal2}
                    id={secondModal}
                    v-slots={() => (
                        <ModalContainer
                            title="Example Modal 2"
                            ref="modal3"
                            callback={handlerSecondModal.toClose}
                        />
                    )}
                />
            </div>
        </div>
    );
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
    },
};
