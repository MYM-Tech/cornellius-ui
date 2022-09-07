import { CSSProperties, HTMLAttributes } from 'vue';
import { Key, MouseEventHandler } from '../../util/types';

export interface NoticeProps {
    prefixCls: string;
    duration?: number | null;
    updateMark?: string;
    /** Mark as final key since set maxCount may keep the key but user pass key is different */
    noticeKey: Key;
    closeIcon?: any;
    closable?: boolean;
    props?: HTMLAttributes;
    onClick?: MouseEventHandler;
    onClose?: (key: Key) => void;
}

export interface NoticeContent extends Omit<NoticeProps, 'prefixCls' | 'noticeKey' | 'onClose'> {
    prefixCls?: string;
    key?: Key;
    updateMark?: string;
    content?: any;
    onClose?: () => void;
    style?: CSSProperties;
    class?: string;
}

export type NoticeFunc = (noticeProps: NoticeContent) => void;
