import { FunctionalComponent } from 'vue';
import { CorIconProps } from '../CorIconProps.types';

const CorCheckIcon: FunctionalComponent<CorIconProps> = ({ color = 'black' }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7348 7.58264C14.0276 7.87562 14.0274 8.35049 13.7345 8.6433L9.73208 12.6433C9.43947 12.9357 8.96533 12.936 8.67237 12.6439L6.26617 10.2449C5.97284 9.95248 5.97213 9.47761 6.26459 9.18427C6.55704 8.89094 7.03191 8.89023 7.32524 9.18269L9.20127 11.0531L12.6741 7.58232C12.9671 7.28952 13.442 7.28966 13.7348 7.58264Z"
            fill={color}
        />
    </svg>
);

export default CorCheckIcon;
