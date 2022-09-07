import { CSSProperties } from 'vue';
import { VueNode } from '../../util/types';

export type NotificationPlacement =
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';

export interface ConfigProps {
    top?: string | number;
    bottom?: string | number;
    duration?: number;
    prefixCls?: string;
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
    closeIcon?: VueNode | (() => VueNode);
    rtl?: boolean;
    maxCount?: number;
    closable?: boolean;
}

export interface NotificationArgsProps {
    title: VueNode | (() => VueNode);
    description?: VueNode | (() => VueNode);
    btn?: VueNode | (() => VueNode);
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: VueNode | (() => VueNode);
    placement?: NotificationPlacement;
    style?: CSSProperties;
    prefixCls?: string;
    class?: string;
    readonly type?: IconType;
    onClick?: () => void;
    top?: string;
    bottom?: string;
    getContainer?: () => HTMLElement;
    closeIcon?: VueNode | (() => VueNode);
    appContext?: any;
    closable?: boolean;
}

export interface NotificationInstance {
    success(args: NotificationArgsProps): void;
    error(args: NotificationArgsProps): void;
    info(args: NotificationArgsProps): void;
    warning(args: NotificationArgsProps): void;
    open(args: NotificationArgsProps): void;
}

export interface NotificationApi extends NotificationInstance {
    warn(args: NotificationArgsProps): void;
    close(key: string): void;
    config(options: ConfigProps): void;
    destroy(): void;
}
