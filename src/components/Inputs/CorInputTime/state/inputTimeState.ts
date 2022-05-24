import { ref } from 'vue';
import { CorInputTimeState } from './inputTimeState.type';

const inputTimeState = (value?: Date) => {
    const state = ref<CorInputTimeState>({
        hours: value?.getHours() || 0,
        minutes: value?.getMinutes() || 0,
        seconds: value?.getSeconds() || 0,
    });

    return state;
};

export default inputTimeState;
