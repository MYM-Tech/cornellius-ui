import { defineComponent, reactive, VNode } from 'vue';
import CSS from './CorDatePicker.module.scss';

const CorDatePicker = defineComponent({
    components: {},
    setup() {
        const currentDate = reactive(new Date());
        const firstOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        ).getDay();
        const lastOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        ).getDate();

        const dayBlocks: VNode[] = Array.from({ length: 45 }, (v, index) => {
            const numberToShow =
                index >= firstOfMonth && index < firstOfMonth + lastOfMonth
                    ? index - firstOfMonth + 1
                    : '';

            return <div key={`day-block-${index}`}>{numberToShow}</div>;
        });

        return () => <div class={CSS['cor-date-picker__grid']}>{dayBlocks}</div>;
    },
});

export default CorDatePicker;
