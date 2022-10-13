import classNames from 'classnames';
import { CSSProperties } from 'vue';
import { renderHelper } from '../../util/helpers';
// import CorCheckIcon from '../Icons/CorCheckIcon/CorCheckIcon';
import Notifier from '../Notifier/Notifier';
import { NotifierInstance } from '../Notifier/Notifier.types';
import {
    ConfigProps,
    NotificationApi,
    NotificationArgsProps,
    NotificationPlacement,
} from './Notification.types';
import './Notification.scss';
import { VueNode } from '../../util/types';

// cached instances
const notificationInstances: { [key: string]: NotifierInstance } = {};

// default values
let defaultDuration = 5;
let defaultTop = '24px';
let defaultBottom = '24px';
let defaultPrefixCls = 'cor_notification';
let defaultPlacement: NotificationPlacement = 'topRight';
let defaultGetContainer = () => document.body;
let defaultCloseIcon: VueNode | (() => VueNode) = null;
let defaultClosable = true;
let rtl = false;
let maxCount: number;

// set the config to override defaults
function setNotificationConfig(options: ConfigProps) {
    const { duration, placement, bottom, top, getContainer, closeIcon, prefixCls } = options;
    if (prefixCls !== undefined) {
        defaultPrefixCls = prefixCls;
    }
    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = typeof bottom === 'number' ? `${bottom}px` : bottom;
    }
    if (top !== undefined) {
        defaultTop = typeof top === 'number' ? `${top}px` : top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
    if (closeIcon !== undefined) {
        defaultCloseIcon = closeIcon;
    }
    if (options.rtl !== undefined) {
        rtl = options.rtl;
    }
    if (options.maxCount !== undefined) {
        maxCount = options.maxCount;
    }
    if (options.closable !== undefined) {
        defaultClosable = options.closable;
    }
}

// return style based on placement
function getPlacementStyle(
    placement: NotificationPlacement,
    top: string = defaultTop,
    bottom: string = defaultBottom
): CSSProperties {
    let style: CSSProperties = {};

    switch (placement) {
        case 'top':
            style = {
                left: '50%',
                transform: 'translate(-50%, 0)',
                top,
                bottom: 'auto',
            };
            break;
        case 'bottom':
            style = {
                left: '50%',
                transform: 'translate(-50%, 0)',
                bottom,
                top: 'auto',
            };
            break;
        case 'topLeft':
            style = {
                left: '0px',
                top,
                bottom: 'auto',
            };
            break;
        case 'topRight':
            style = {
                right: '0px',
                top,
                bottom: 'auto',
            };
            break;
        case 'bottomLeft':
            style = {
                left: '0px',
                top: 'auto',
                bottom,
            };
            break;
        case 'bottomRight':
            style = {
                right: '0px',
                top: 'auto',
                bottom,
            };
            break;
        default:
            break;
    }

    return style;
}

// we are using the notification instance
// as a singleton so we need to call this
// function to retrieve the current instance
function getNotificationInstance(
    {
        prefixCls: customPrefixCls,
        placement = defaultPlacement,
        getContainer = defaultGetContainer,
        top,
        bottom,
        closeIcon = defaultCloseIcon,
        appContext,
    }: NotificationArgsProps,
    callback: (instance: NotifierInstance) => void
) {
    const prefixCls = customPrefixCls || defaultPrefixCls;
    const key = `${prefixCls}_${placement}_${rtl}`;
    const cachedInstance = notificationInstances[key];
    if (cachedInstance) {
        callback(cachedInstance);
        return;
    }

    const notificationClasses = classNames(`${prefixCls}_${placement}`, {
        [`${prefixCls}_rtl`]: rtl === true,
    });

    Notifier.newInstance(
        {
            name: 'notification',
            prefixCls, //
            class: notificationClasses,
            style: getPlacementStyle(placement, top, bottom),
            appContext,
            getContainer,
            // TODO: replace by an actual icon
            closeIcon: ({ prefixCls: prefix }: { prefixCls: string }) => (
                <span class={`${prefix}_close_x`}>
                    {renderHelper(closeIcon, {}, <a class={`${prefix}_close_icon`}>x</a>)}
                </span>
            ),
            maxCount,
            transitionName: 'fade',
            hasTransitionName: true,
        },
        (notificationInstance: NotifierInstance) => {
            notificationInstances[key] = notificationInstance;
            callback(notificationInstance);
        }
    );
}

// open a notification by calling notify of the notifier instance
function open(args: NotificationArgsProps) {
    const { icon, title, description, btn, onClick, onClose, key, render } = args;

    getNotificationInstance(args, (instance) => {
        instance.notify({
            duration: args.duration === undefined ? defaultDuration : args.duration,
            closable: args.closable === undefined ? defaultClosable : args.closable,
            onClick,
            onClose,
            key,
            style: args.style || {},
            class: args.class,
            content: ({ prefixCls: componentPrefixCls }) => {
                const prefixCls = `${componentPrefixCls}_notice`;

                // custom render
                if (render) {
                    return renderHelper(render, { prefixCls, ...args });
                }

                let iconNode = null;
                if (icon) {
                    iconNode = () => <span class={`${prefixCls}_icon`}>{renderHelper(icon)}</span>;
                }

                return (
                    <div class={iconNode ? `${prefixCls}_with_icon` : ''}>
                        <div class={`${prefixCls}_top_container`}>
                            {iconNode && iconNode()}
                            <div class={`${prefixCls}_title`}>
                                {!description && iconNode ? (
                                    <span class={`${prefixCls}_title_single_line_auto_margin`} />
                                ) : null}
                                {renderHelper(title)}
                            </div>
                        </div>
                        <div class={`${prefixCls}_description`}>{renderHelper(description)}</div>
                        {btn ? <span class={`${prefixCls}_btn`}>{renderHelper(btn)}</span> : null}
                    </div>
                );
            },
        });
    });
}

// api we are exposing to the users
const notification: NotificationApi = {
    open,
    close(key: string) {
        Object.keys(notificationInstances).forEach((cacheKey) =>
            notificationInstances[cacheKey].removeNotice(key)
        );
    },
    config: setNotificationConfig,
    destroy() {
        Object.keys(notificationInstances).forEach((cacheKey) => {
            notificationInstances[cacheKey].destroy();
            delete notificationInstances[cacheKey];
        });
    },
};

export default notification;
