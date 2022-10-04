import { TransitionGroupProps, TransitionProps } from 'vue';

export const getTransitionGroupProps = (transitionName: string, opt: TransitionProps = {}) => {
    const transitionProps: TransitionGroupProps = transitionName
        ? {
              name: transitionName,
              appear: true,
              appearActiveClass: `${transitionName}`,
              appearToClass: `${transitionName}_appear ${transitionName}_appear_active`,
              enterFromClass: `${transitionName}_appear ${transitionName}_enter ${transitionName}_appear_prepare ${transitionName}_enter_prepare`,
              enterActiveClass: `${transitionName}`,
              enterToClass: `${transitionName}_enter ${transitionName}_appear ${transitionName}_appear_active ${transitionName}_enter_active`,
              leaveActiveClass: `${transitionName} ${transitionName}_leave`,
              leaveToClass: `${transitionName}_leave_active`,
              ...opt,
          }
        : { css: false, ...opt };
    return transitionProps;
};
