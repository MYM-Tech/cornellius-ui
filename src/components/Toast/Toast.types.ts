import type { CSSProperties } from 'vue';
import type { Key, VueNode } from '../../util/types';

export interface ToastType extends PromiseLike<any> {
    (): void;
}

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface ToastArgsProps {
    content: string | (() => VueNode) | VueNode;
    duration?: number;
    type?: NoticeType;
    prefixCls?: string;
    rootPrefixCls?: string;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    transitionName?: string;
    onClose?: () => void;
    icon?: (() => VueNode) | VueNode;
    key?: string | number;
    style?: CSSProperties;
    class?: string;
    appContext?: any;
    onClick?: (e: MouseEvent) => void;
    closeIcon?: (() => VueNode) | VueNode;
    // render?: () => VueNode | HTMLElement;
}

export interface ConfigOptions {
    top?: string;
    duration?: number;
    prefixCls?: string;
    getContainer?: () => HTMLElement;
    transitionName?: string;
    maxCount?: number;
    rtl?: boolean;
}

export type ConfigDuration = number;
export type JointContent = VueNode | ToastArgsProps;
export type ConfigOnClose = () => void;

export interface ToastInstance {
    info(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    success(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    error(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    warning(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    loading(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    open(args: ToastArgsProps): ToastType;
}

export interface ToastApi extends ToastInstance {
    warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): ToastType;
    config(options: ConfigOptions): void;
    destroy(messageKey?: Key): void;
}
