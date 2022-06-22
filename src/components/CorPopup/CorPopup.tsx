import { OffsetOptions } from '@floating-ui/core';
import { offset, Placement } from '@floating-ui/dom';
import classNames from 'classnames';
import { defineComponent, PropType, ref } from 'vue';
import usePopper from '../../composable/usePopper/usePopper';
import CSS from './CorPopup.module.scss';

const CorPopup = defineComponent({
    props: {
        offset: {
            type: Object as PropType<OffsetOptions>,
            default: () => ({ mainAxis: 8, alignmentAxis: 0 }),
        },
        autoFocus: {
            type: Boolean,
            default: true,
        },
        position: {
            type: String as PropType<Placement | 'auto'>,
            default: 'auto',
        },
        keyEscClose: {
            type: Boolean,
            default: true,
        },
        withArrow: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: false,
        },
        classes: {
            type: Array as PropType<Array<string>>,
            default: () => [],
        },
        arrowClasses: {
            type: Array as PropType<Array<string>>,
            default: () => [],
        },
        trigger: {
            type: String as PropType<'click' | 'hover' | 'manual'>,
            default: 'click',
        },
        onOpen: {
            type: Function as PropType<() => void>,
        },
        onClose: {
            type: Function as PropType<() => void>,
        },
        onHover: {
            type: Function as PropType<() => void>,
        },
    },
    setup(props, { slots }) {
        const popupClasses = classNames(CSS.cor_popup_content, props.classes);
        const arrowClasses = classNames(CSS.cor_popup_arrow, props.arrowClasses);

        const triggerRef = ref<Element | null>(null);
        const popperRef = ref<HTMLElement | null>(null);
        const arrowRef = ref<HTMLElement | null>(null);

        const { isOpen, show, hide, toggle } = usePopper(triggerRef, popperRef, {
            // Set middleware according to props
            middleware: [offset(props.offset)],

            // Set placement
            placement: props.position !== 'auto' ? props.position : undefined,

            // Manage arrow
            ...(props.withArrow
                ? {
                      arrowRef,
                  }
                : {}),
        });

        const togglePopper = () => {
            toggle();

            if (isOpen.value && props.onOpen) {
                props.onOpen();
            }

            if (!isOpen.value && props.onClose) {
                props.onClose();
            }
        };

        const showPopper = () => {
            show();

            if (props.autoFocus) {
                popperRef.value?.focus();
            }

            if (props.onOpen) {
                props.onOpen();
            }
        };

        const closePopper = () => {
            hide();

            if (props.onClose) {
                props.onClose();
            }
        };

        // Manage keyEscClose
        if (props.keyEscClose) {
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closePopper();
                }
            });
        }

        return () => (
            <>
                <div
                    ref={triggerRef}
                    onClick={props.trigger === 'click' ? togglePopper : undefined}
                    onMouseenter={props.trigger === 'hover' ? showPopper : undefined}
                    onMouseleave={props.trigger === 'hover' ? closePopper : undefined}
                >
                    {slots.default && slots.default()}
                </div>
                <div ref={popperRef} class={popupClasses}>
                    {slots.content && slots.content()}
                    {props.withArrow && <div class={arrowClasses} ref={arrowRef}></div>}
                </div>
            </>
        );
    },
});

export default CorPopup;
