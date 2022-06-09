import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import { CorButtonProps } from './CorButton.types';
import CSS from './CorButton.module.scss';

const CorButton: FunctionalComponent<CorButtonProps> = ({
    label = 'Button',
    className,
    leftIcon,
    onClick,
    rightIcon,
    size = 'regular',
    type = 'primary',
    ...props
}) => {
    const classes = classNames(CSS.cor_button, className, {
        [CSS['cor_button--primary']]: type === 'primary',
        [CSS['cor_button--secondary']]: type === 'secondary',
        [CSS['cor_button--tertiary']]: type === 'tertiary',
        [CSS['cor_button--regular']]: size === 'regular',
        [CSS['cor_button--large']]: size === 'large',
        [CSS['cor_button--small']]: size === 'small',
        [CSS['cor_button--micro']]: size === 'micro',
    });

    return (
        <button class={classes} onClick={onClick} {...props}>
            {leftIcon && <div class={CSS['cor_button_icon--left']}>{leftIcon}</div>}
            {label}
            {rightIcon && <div class={CSS['cor_button_icon--right']}>{rightIcon}</div>}
        </button>
    );
};

export default CorButton;
