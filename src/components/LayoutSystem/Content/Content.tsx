import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import STYLE from './Content.module.scss';

export interface ContentProps {
  fullSize?: boolean;
  className?: string;
}

export const Content: FunctionalComponent<ContentProps> = ({ className, fullSize = true }, { slots }) => {

  return <div 
            class={
              classNames(
                className, 
                fullSize ? STYLE.content__fullsize : STYLE.content
              )}
          >
          {slots.default && slots.default()}
        </div>;
};
