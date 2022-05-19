import HelloWorld from './HelloWorld';
import logo from '../assets/logo.png';
import { Card } from './Card/Card';
import { LazyLoadImplement } from './LazyLoad/Implementation';
import { handleModalState, Modal, modalState } from './Modal/modal';


export default () => {
    
    return (
        <div>
            <img alt="Vue logo" src={logo} />
            <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
            <Card borderRadius={false} primary={true}>
                YOLO
            </Card>
            <button onClick={() => handleModalState.open() }> open Modal</button>
            <div>{`modalState.isOpen ${modalState.isOpen}`}</div>
            <Modal 
                target='#myModal'
                open={modalState.isOpen}
                escKeyClose
                v-slots={()=> 
                    <>
                        <p>HOLAAAA</p>
                        <button onClick={() => {handleModalState.close()}}> 
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

