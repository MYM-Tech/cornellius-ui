import { shallowReactive } from 'vue';
import { CorInputTimeState } from './inputTimeState.type';

const inputTimeState = (value?: Date) => {
    const state = shallowReactive<CorInputTimeState>({
        hours: value?.getHours() || 0,
        minutes: value?.getMinutes() || 0,
        seconds: value?.getSeconds() || 0,
    });

    return state;
};

export default inputTimeState;
