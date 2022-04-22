import { FunctionalComponent } from 'vue';
import classnames from 'classnames';
import CSS from './Card.module.scss';

export interface CardProps {
    primary: boolean;
    borderRadius: boolean;
}

export const Card: FunctionalComponent<CardProps> = ({ primary, borderRadius }, { slots }) => (
    <div
        class={classnames(
            CSS.card,
            primary ? CSS.card__primary : '',
            borderRadius ? '' : CSS.card__nonBoderRadius
        )}
    >
        {slots.default && slots.default()}
    </div>
);
