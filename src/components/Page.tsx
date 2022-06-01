import HelloWorld from './HelloWorld';
import logo from '../assets/logo.png';
import { Card } from './Card/Card';
import { LazyLoadImplement } from './LazyLoad/Implementation';
import { CorModal, handleModalState } from './Modal/CorModal/CorModal';
import modalState from './Modal/CorModal/state/ModalState';

export default () => {
    const { toClose, toOpen } = handleModalState(modalState.value);
    return (
        <div>
            <img alt="Vue logo" src={logo} />
            <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
            <Card borderRadius={false} primary={true}>
                YOLO
            </Card>
            <button onClick={() => toOpen()}> open Modal</button>
            <CorModal
                state={modalState.value}
                target="#myModal"
                id="myModal"
                closeOnFocusOut
                escKeyClose
                v-slots={() => (
                    <>
                        <p>HOLAAAA</p>
                        <button
                            onClick={() => {
                                toClose();
                            }}
                        >
                            close Modal
                        </button>
                    </>
                )}
            ></CorModal>
            <LazyLoadImplement numberOfImage={10} />
        </div>
    );
};
