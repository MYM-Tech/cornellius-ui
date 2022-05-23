import { ShallowReactive } from 'vue';
import { CorInputTimeState } from '../state/inputTimeState.type';

const handleInputTime = (state: ShallowReactive<CorInputTimeState>) => {
    const setHours = (value: number) => {
        state.hours = value;
    };

    const setMinutes = (value: number) => {
        state.minutes = value;
    };

    const setSeconds = (value: number) => {
        state.seconds = value;
    };

    return { setHours, setMinutes, setSeconds };
};

export default handleInputTime;
