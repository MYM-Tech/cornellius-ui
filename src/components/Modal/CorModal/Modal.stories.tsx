import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { handleModalState, CorModal } from './CorModal';
import { CorModalProps } from './CorModal.type';
import modalState from './state/ModalState';
import { ModalStateType } from './state/ModalState.type';

export default {
    title: 'Cornellius/Feedback/CorModal',
    component: CorModal,
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

const Template: StoryFn<CorModalProps> = (args) => {
    const modalId = 'modal1';
    const firstModal = ref({
        isOpen: false,
        ref: modalId,
    });

    const handlerOpen = handleModalState(firstModal.value);
    console.log(firstModal.value);

    return (
        <div>
            <Button callback={() => handlerOpen.open()} title={'open modal'} />
            <CorModal {...args} id={modalId} state={firstModal.value}>
                <ModalContainer
                    title="this is an example of simple Modal"
                    callback={() => handlerOpen.close()}
                />
            </CorModal>
        </div>
    );
};
export const ModalStory = Template.bind({});

ModalStory.args = {
    closeOnFocusOut: false,
    closeOnBlur: true,
    escKeyClose: false,
};

const doubleModal: StoryFn<{ Modal1: CorModalProps; Modal2: CorModalProps }> = (args) => {
    const firstModal = 'modal1';
    const secondModal = 'modal2';

    const firstModalState = ref<ModalStateType>({
        isOpen: false,
        ref: firstModal,
    });
    const { close, open } = handleModalState(firstModalState.value);
    const handlerSecondModal = handleModalState(modalState.value);

    return (
        <div id="ContainerModal">
            <div>
                <Button title={'open Modal 1'} callback={open} />
                <CorModal
                    state={firstModalState.value}
                    v-bind={args.Modal1}
                    id={firstModal}
                    closeOnFocusOut
                    v-slots={() => (
                        <ModalContainer
                            title="example Modal 1 closeOnFocusOut"
                            ref={firstModal}
                            callback={close}
                        />
                    )}
                />
                <br />
                <Button title={'open Modal 2'} callback={handlerSecondModal.open} />
                <CorModal
                    state={modalState.value}
                    v-bind={args.Modal2}
                    id={secondModal}
                    closeOnBlur
                    v-slots={() => (
                        <ModalContainer
                            title="Example Modal 2 closeOnBlur"
                            ref={secondModal}
                            callback={handlerSecondModal.close}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export const Doublemodal = doubleModal.bind({});
