import { autoPlacement } from '@floating-ui/core';
import { arrow, autoUpdate, computePosition, flip, shift } from '@floating-ui/dom';
import { onMounted, onUnmounted, ref, Ref } from 'vue';
import { PopperOptions, UsePopper } from './usePopper.types';

const usePopper = (triggerRef: Ref, popperRef: Ref, options?: PopperOptions): UsePopper => {
    /**
     * Function that'll update our popper. It sets the position and manage middlewares everytime we open it.
     */
    const isOpen = ref(false);

    const update = () => {
        if (triggerRef.value === null || popperRef.value === null) return;

        // Excluding custom middlewares from mandatory ones
        const paramMiddlewares = options?.middleware || [];
        const optionsWithoutMiddlewares = {
            ...options,
            middleware: [],
            ...(options?.placement !== 'auto'
                ? { placement: options?.placement }
                : { placement: undefined }),
        };

        computePosition(triggerRef.value, popperRef.value, {
            // Set custom options
            ...optionsWithoutMiddlewares,
            middleware: [
                // Add custom middlewares
                ...paramMiddlewares,

                // Manage placement
                ...(options?.placement === 'auto' ? [autoPlacement()] : [flip()]),
                shift({ padding: 5 }),
                ...(options?.arrowRef && options.arrowRef.value
                    ? [arrow({ element: options.arrowRef.value })]
                    : []),
            ],
        }).then(({ x, y, middlewareData, placement }) => {
            // Set popper position
            Object.assign(popperRef.value.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            // If arrow is specified, set its position
            if (options?.arrowRef?.value) {
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement.split('-')[0]];

                const arrowPos = middlewareData.arrow;

                Object.assign(options.arrowRef.value.style, {
                    left: arrowPos?.x !== null ? `${arrowPos?.x}px` : '',
                    top: arrowPos?.y !== null ? `${arrowPos?.y}px` : '',
                    right: '',
                    bottom: '',
                    // Because of type, we need to check if staticSide exists
                    ...(staticSide ? { [staticSide]: '-4px' } : {}),
                });
            }
        });
    };

    const show = () => {
        popperRef.value.style.display = 'block';
        isOpen.value = true;
        update();
    };

    const hide = () => {
        popperRef.value.style.display = '';
        isOpen.value = false;
    };

    const toggle = () => {
        if (popperRef === null) return;

        if (popperRef.value.style.display === '') {
            show();
            return;
        }

        hide();
    };

    let cleanup: () => void = () => {
        console.warn('cornellius-ui: popper cleanup has not been set yet');
    };

    onMounted(() => {
        cleanup = autoUpdate(triggerRef.value, popperRef.value, update);
    });

    onUnmounted(() => {
        cleanup();
    });

    return { isOpen, update, show, hide, toggle };
};

export default usePopper;
