import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import STYLE from './MainLayout.module.scss';

export interface MainLayoutProps {
    reverseSidebar?: boolean;
    className?: string;
    style?: string
}

export const MainLayout: FunctionalComponent<MainLayoutProps> = (
    { className, reverseSidebar = false, style },
    { slots }
) => (
    <div style={style} class={classNames(className, STYLE.main)}>
        <div class={classNames(STYLE.main__center, reverseSidebar ? STYLE.reverse : '')}>
            {slots.default && slots.default()}
        </div>
    </div>
);
