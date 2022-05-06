import HelloWorld from './HelloWorld';
import logo from '../assets/logo.png';
import { Card } from './Card/Card';
import { LazyLoadImplement } from './LazyLoad/Implementation';

export default () => (
    <div>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        <Card borderRadius={false} primary={true}>
            YOLO
        </Card>
        <LazyLoadImplement numberOfImage={10}/>
    </div>
);
