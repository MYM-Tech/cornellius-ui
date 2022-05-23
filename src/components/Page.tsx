import HelloWorld from './HelloWorld';
import logo from '../assets/logo.png';
import { Card } from './Card/Card';
import { LazyLoadImplement } from './LazyLoad/Implementation';
import { Modal, HandleModalState } from './Modal/Modal';
import modalState from './Modal/state/ModalState';


export default () => {
    const {toClose, toOpen} = HandleModalState(modalState.value)
    return (
        <div>
            <img alt="Vue logo" src={logo} />
            <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
            <Card borderRadius={false} primary={true}>
                YOLO
            </Card>
            <button onClick={() => toOpen }> open Modal</button>
            <Modal 
                target='#myModal'
                id='myModal'
                v-slots={()=> 
                    <>
                        <p>HOLAAAA</p>
                        <button onClick={() => {toClose}}> 
                            close Modal
                        </button>
                    </>
                }
            >
            </Modal>
            <LazyLoadImplement numberOfImage={10}/>
        </div>
    )
}

