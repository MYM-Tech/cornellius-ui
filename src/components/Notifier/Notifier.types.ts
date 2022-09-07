import { Key } from '../../util/types';
import { NoticeContent, NoticeFunc, NoticeProps } from './Notice.types';

export interface NotifierInstance {
    notify: NoticeFunc;
    removeNotice: (key: Key) => void;
    destroy: () => void;
    component: Notification;
}

export interface NotifierProps {
    prefixCls?: string;
    transitionName?: string;
    animation?: string;
    maxCount?: number;
    closeIcon?: any;
}

export type HolderReadyCallback = (
    div: HTMLDivElement,
    noticeProps: NoticeProps & { key: Key }
) => void;

export type NotifierState = {
    notice: NoticeContent & {
        userPassKey?: Key;
    };
    holderCallback?: HolderReadyCallback;
}[];
