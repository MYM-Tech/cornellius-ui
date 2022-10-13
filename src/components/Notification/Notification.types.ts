import { AppContext, CSSProperties } from 'vue';
import { VueNode } from '../../util/types';

export type NotificationPlacement =
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';

export type ConfigProps = {
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
};

export type NotificationArgsProps = {
    title?: VueNode | (() => VueNode);
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
    onClick?: () => void;
    top?: string;
    bottom?: string;
    getContainer?: () => HTMLElement;
    closeIcon?: VueNode | (() => VueNode);
    appContext?: AppContext;
    closable?: boolean;
    render?: VueNode | ((config: NotificationArgsProps) => VueNode);
};

export type NotificationInstance = {
    open(args: NotificationArgsProps): void;
};

export type NotificationApi = NotificationInstance & {
    close(key: string): void;
    config(options: ConfigProps): void;
    destroy(): void;
};
