import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import STYLE from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FunctionalComponent<SidebarProps> = ({className}: SidebarProps, { slots }) => {
  return <div class={classNames(STYLE.sidebar, className)}>
            {slots.default && slots.default()}
        </div>;
};
