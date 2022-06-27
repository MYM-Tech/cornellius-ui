import { FunctionalComponent } from 'vue';
import changeOnPressArrows from './hooks/changeOnPressArrows';
import handleOnBlur from './hooks/handleOnBlur';
import handleOnChange from './hooks/handleOnChange';
import { InputTimeType } from './CorInputTime.type';

const InputTime: FunctionalComponent<InputTimeType> = ({
    maxValue,
    minValue,
    onChange,
    type,
    value,
    time,
    disable,
    onBlur,
    timeFormat = 'HH:mm',
    onKeydown,
}) => (
    <input
        v-model={value}
        value={value}
        disabled={disable}
        v-model:update={value}
        onInput={(e) => handleOnChange(e, timeFormat, time, type, maxValue, minValue, onChange)}
        onBlur={(e) => {
            handleOnBlur(e, timeFormat, time, 'hours', value, value, onBlur);
        }}
        onKeydown={(e) => {
            changeOnPressArrows(e, time, timeFormat, 'hours', value, value, onKeydown);
        }}
    />
);

export default InputTime;
