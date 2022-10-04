import {
    createVNode,
    computed,
    defineComponent,
    ref,
    TransitionGroup,
    onMounted,
    render as vueRender,
} from 'vue';
import type { CSSProperties } from 'vue';
import Notice from './Notice';
import { getTransitionGroupProps } from '../../util/transitions';
import type { Key } from '../../util/types';
import type { NoticeContent } from './Notice.types';
import type {
    HolderReadyCallback,
    NotifierInstance,
    NotifierProps,
    NotifierState,
} from './Notifier.types';
import { renderHelper } from '../../util/helpers';

let seed = 0;
const now = Date.now();

function getUuid() {
    const id = seed;
    seed += 1;
    return `notifier_${now}_${id}`;
}

// Notifier is wrapping notices in a TransitionGroup
const Notifier = defineComponent<NotifierProps>({
    name: 'v-notifier',
    inheritAttrs: false,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    props: ['prefixCls', 'transitionName', 'animation', 'maxCount', 'closeIcon'] as any,
    setup(props, { attrs, expose, slots }) {
        const hookRefs = new Map<Key, HTMLDivElement>();

        // ref containing all currently displayed notices
        const notices = ref<NotifierState>([]);

        const transitionProps = computed(() => {
            const { prefixCls, animation = 'fade' } = props;
            let name = props.transitionName;

            if (!name && animation) {
                name = `${prefixCls}_${animation}`;
            }

            return getTransitionGroupProps(name as string);
        });

        // method we expose to add a notice to the notice list
        const add = (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => {
            const key = originNotice.key || getUuid();
            const notice: NoticeContent & { key: Key; userPassKey?: Key } = {
                ...originNotice,
                key,
            };
            const { maxCount } = props;
            const noticeIndex = notices.value.map((v) => v.notice.key).indexOf(key);
            const updatedNotices = notices.value.concat();

            if (noticeIndex !== -1) {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                updatedNotices.splice(noticeIndex, 1, { notice, holderCallback } as any);
            } else {
                if (maxCount && notices.value.length >= maxCount) {
                    notice.key = updatedNotices[0].notice.key as Key;
                    notice.updateMark = getUuid();
                    notice.userPassKey = key;
                    updatedNotices.shift();
                }
                /* eslint-disable @typescript-eslint/no-explicit-any */
                updatedNotices.push({ notice, holderCallback } as any);
            }
            notices.value = updatedNotices;
        };

        // method we expose to remove a notice to the notice list
        const remove = (removeKey: Key) => {
            notices.value = notices.value.filter(({ notice: { key, userPassKey } }) => {
                const mergedKey = userPassKey || key;
                return mergedKey !== removeKey;
            });
        };

        expose({
            add,
            remove,
            notices,
        });

        return () => {
            const { prefixCls, closeIcon = slots.closeIcon?.({ prefixCls }) } = props;

            const noticeNodes = notices.value.map(({ notice, holderCallback }, index) => {
                const updateMark =
                    index === notices.value.length - 1 ? notice.updateMark : undefined;
                const { key, userPassKey } = notice;

                const { content } = notice;

                /* eslint-disable @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                const noticeProps = {
                    prefixCls,
                    closeIcon: renderHelper(closeIcon, { prefixCls }),
                    ...(notice as any),
                    ...notice.props,
                    key,
                    noticeKey: userPassKey || key,
                    updateMark,
                    onClose: (noticeKey: Key) => {
                        remove(noticeKey);
                        notice.onClose?.();
                    },
                    onClick: notice.onClick,
                };

                if (holderCallback) {
                    return (
                        <div
                            key={key}
                            class={`notifier_hook_holder`}
                            ref={(div: any) => {
                                if (typeof key === 'undefined') {
                                    return;
                                }

                                if (div) {
                                    hookRefs.set(key, div);
                                    holderCallback(div, noticeProps);
                                } else {
                                    hookRefs.delete(key);
                                }
                            }}
                        />
                    );
                }
                return (
                    <Notice {...noticeProps}>
                        {typeof content === 'function' ? content({ prefixCls }) : content}
                    </Notice>
                );
            });

            const classNames = {
                [prefixCls as string]: 1,
                [attrs.class as string]: !!attrs.class,
            };

            return (
                <div
                    class={classNames}
                    style={
                        (attrs.style as CSSProperties) || {
                            top: '65px',
                            left: '50%',
                        }
                    }
                >
                    <TransitionGroup tag="div" {...transitionProps.value}>
                        {noticeNodes}
                    </TransitionGroup>
                </div>
            );
        };
    },
});

// Create a new Notifier instance
Notifier.newInstance = function newNotifierInstance(
    properties: Record<string, any>,
    callback: (instance: NotifierInstance) => void
) {
    const {
        getContainer,
        appContext,
        transitionName: customTransitionName,
        hasTransitionName,
        prefixCls,
        rootPrefixCls,
        ...props
    } = properties || {};

    const div = document.createElement('div');

    if (getContainer) {
        const root = getContainer();
        root.appendChild(div);
    } else {
        // by default we append our wrapper to the document's body
        document.body.appendChild(div);
    }

    const Wrapper = defineComponent({
        name: 'NotifierWrapper',
        setup(_props, { attrs }) {
            const notiRef = ref();

            onMounted(() => {
                // we return the exposed api
                callback({
                    notify(noticeProps: NoticeContent) {
                        notiRef.value?.add(noticeProps);
                    },
                    removeNotice(key: Key) {
                        notiRef.value?.remove(key);
                    },
                    destroy() {
                        vueRender(null, div);
                        if (div.parentNode) {
                            div.parentNode.removeChild(div);
                        }
                    },
                    component: notiRef.value,
                });
            });

            return () => {
                const transitionName = hasTransitionName
                    ? customTransitionName
                    : `${rootPrefixCls}_${customTransitionName}`;

                return (
                    <Notifier
                        ref={notiRef}
                        {...attrs}
                        prefixCls={prefixCls}
                        transitionName={transitionName}
                    />
                );
            };
        },
    });

    const vm = createVNode(Wrapper, props);
    vm.appContext = appContext || vm.appContext;
    vueRender(vm, div);
};

export default Notifier;
