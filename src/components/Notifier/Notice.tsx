import { computed, defineComponent, onMounted, watch, onUnmounted } from 'vue';
import type { CSSProperties } from 'vue';
import classNames, { Argument } from 'classnames';
import { NoticeProps } from './Notice.types';
import { MouseEventHandler } from '../../util/types';

export default defineComponent<NoticeProps>({
    name: 'v-notice',
    inheritAttrs: false,
    props: [
        'prefixCls',
        'duration',
        'updateMark',
        'noticeKey',
        'closeIcon',
        'closable',
        'props',
        'onClick',
        'onClose',
        /* eslint-disable @typescript-eslint/no-explicit-any */
    ] as any,
    setup(props, { attrs, slots }) {
        let closeTimer: NodeJS.Timeout | null = null;
        const duration = computed(() => (props.duration === undefined ? 3 : props.duration));

        const clearCloseTimer = () => {
            if (closeTimer) {
                clearTimeout(closeTimer);
                closeTimer = null;
            }
        };

        const close = (e?: MouseEvent) => {
            if (e) {
                e.stopPropagation();
            }
            clearCloseTimer();
            const { onClose, noticeKey } = props;
            if (onClose) {
                onClose(noticeKey as never);
            }
        };

        const startCloseTimer = () => {
            if (duration.value) {
                closeTimer = setTimeout(() => {
                    close();
                }, duration.value * 1000);
            }
        };

        const restartCloseTimer = () => {
            clearCloseTimer();
            startCloseTimer();
        };

        onMounted(() => {
            startCloseTimer();
        });

        onUnmounted(() => {
            clearCloseTimer();
        });

        watch(
            [duration, () => props.updateMark],
            ([preDuration, preUpdateMark], [newDuration, newUpdateMark]) => {
                if (preDuration !== newDuration || preUpdateMark !== newUpdateMark) {
                    restartCloseTimer();
                }
            },
            { flush: 'post' }
        );
        return () => {
            const { prefixCls, closable, closeIcon = slots.closeIcon?.(), onClick } = props;
            const { class: className, style } = attrs;
            const componentClass = `${prefixCls}_notice`;

            const dataOrAriaAttributeProps = Object.keys(attrs).reduce(
                (acc: Record<string, string>, key: string) => {
                    if (
                        key.substring(0, 5) === 'data-' ||
                        key.substring(0, 5) === 'aria-' ||
                        key === 'role'
                    ) {
                        acc[key] = (attrs as Record<string, string>)[key];
                    }
                    return acc;
                },
                {}
            );

            const node = (
                <div
                    class={classNames(componentClass, className as Argument, {
                        [`${componentClass}_closable`]: closable,
                    })}
                    style={style as CSSProperties}
                    onMouseenter={clearCloseTimer}
                    onMouseleave={startCloseTimer}
                    onClick={onClick as MouseEventHandler}
                    {...dataOrAriaAttributeProps}
                >
                    <div class={`${componentClass}_content`}>{slots.default?.()}</div>
                    {closable ? (
                        <a tabindex={0} onClick={close} class={`${componentClass}_close`}>
                            {closeIcon || <span class={`${componentClass}_close_x`} />}
                        </a>
                    ) : null}
                </div>
            );

            return node;
        };
    },
});
