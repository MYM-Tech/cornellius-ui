import { cx } from '@emotion/css';
import { FunctionalComponent } from 'vue';
import { mainCenterStyle, mainLayoutStyle, reverseStyle } from './CorderliusLayout.style';
import { CordeliusLayoutProps } from './CordeliusLayout.types';

const CordeliusLayout: FunctionalComponent<CordeliusLayoutProps> = (
    { className, reverseSidebar },
    { slots }
) => {
    const classes = cx(className, mainLayoutStyle);
    const sideBarClasses = cx(mainCenterStyle, {
        [reverseStyle]: reverseSidebar,
    });

    return (
        <div class={classes}>
            <div class={sideBarClasses}>{slots.default && slots.default()}</div>
        </div>
    );
};

export default CordeliusLayout;
