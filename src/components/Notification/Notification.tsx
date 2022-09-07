import classNames from "classnames";
import {CSSProperties} from "vue";
import {renderHelper} from "../../util/helpers";
import CorCheckIcon from "../Icons/CorCheckIcon/CorCheckIcon";
import Notifier from "../Notifier/Notifier";
import {NotifierInstance} from "../Notifier/Notifier.types";
import {ConfigProps, IconType, NotificationApi, NotificationArgsProps, NotificationPlacement} from "./Notification.types";
import './Notification.module.scss'

const notificationInstances: { [key: string]: NotifierInstance } = {};
let defaultDuration = 4.5;
let defaultTop = '24px';
let defaultBottom = '24px';
let defaultPrefixCls = '_cor_notification';
let defaultPlacement: NotificationPlacement = 'topRight';
let defaultGetContainer = () => document.body;
let defaultCloseIcon: any  = null;
let defaultClosable = true;
let rtl = false;
let maxCount: number;

function setNotificationConfig(options: ConfigProps) {
  const {
    duration,
    placement,
    bottom,
    top,
    getContainer,
    closeIcon,
    prefixCls
  } = options;
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

function getPlacementStyle(
  placement: NotificationPlacement,
  top: string = defaultTop,
  bottom: string = defaultBottom,
): CSSProperties {
  let style: CSSProperties;

  switch (placement) {
    case 'top':
      style = {
        //TODO: calc width /2 - notice width - 2
        left: '40%',
        top,
        bottom: 'auto',
      }
      break;
    case 'bottom':
      style = {
        //TODO: calc width /2 - notice width - 2
        left: '40%',
        bottom,
        top: 'auto',
      }
      break;
    case 'topLeft':
      style = {
        left: '0px',
        top,
        bottom: 'auto',
      }
      break;
    case 'topRight':
      style = {
        right: '0px',
        top,
        bottom: 'auto',
      }
      break;
    case 'bottomLeft':
      style = {
        left: '0px',
        top: 'auto',
        bottom,
      }
      break;
    case 'bottomRight':
      style = {
        right: '0px',
        top: 'auto',
        bottom,
      }
      break;
  }

  return style;
}

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
  const key = `${prefixCls}_${placement}_${rtl}`
  const cachedInstance = notificationInstances[key]
  if (cachedInstance) {
    callback(cachedInstance);
    return
  }

  const notificationClasses = classNames(`${prefixCls}_${placement}`, {
    [`${prefixCls}_rtl`]: rtl === true,
  })

  Notifier.newInstance(
    {
      name: 'notification',
      prefixCls,//
      class: notificationClasses,
      style: getPlacementStyle(placement, top, bottom),
      appContext,
      getContainer,
      closeIcon: ({ prefixCls: prefix } : { prefixCls : string }) => {
        return (
          <span class={`${prefix}_close_x`}>
            { renderHelper(
                closeIcon,
                {},
                <a class={`${prefix}_close_icon`}>x</a>,
              )
            }
          </span>
        );
      },
      maxCount,
      transitionName: 'fade',
      hasTransitionName: true,
    },
    (notificationInstance: any) => {
      notificationInstances[key] = notificationInstance;
      callback(notificationInstance);
    }
  )
}

const typeToIcon = {
  success: CorCheckIcon,
  info: CorCheckIcon,
  error: CorCheckIcon,
  warning: CorCheckIcon,
};

function create(args: NotificationArgsProps) {
  const { icon, type, title, description, btn, onClick, onClose, key } = args;

  getNotificationInstance(args, instance => {
    instance.notify({
      duration: args.duration === undefined ? defaultDuration : args.duration,
      closable: args.closable === undefined ? defaultClosable : args.closable,
      onClick,
      onClose,
      key,
      style: args.style || {},
      class: args.class,
      content: ({ prefixCls: componentPrefixCls } : { prefixCls: string }) => {
        const prefixCls = `${componentPrefixCls}_notice`
        let iconNode = null;
        if (icon) {
          iconNode = () => <span class={`${prefixCls}_icon`}>{renderHelper(icon)}</span>
        } else if (type) {
          const Icon = typeToIcon[type];
          // TODO:
          // iconNode = () => <Icon class={`${prefixCls}_icon ${prefixCls}_icon_${type}]`} />
        }

        return (
          <div class={iconNode ? `${prefixCls}_with_icon` : ''}>
            {iconNode && iconNode()}
            <div class={`${prefixCls}_title`}>
              {!description && iconNode ? (
                <span class={`${prefixCls}_title_single_line_auto_margin`} />
              ) : null}
              {renderHelper(title)}
            </div>
            <div class={`${prefixCls}_description`}>{renderHelper(description)}</div>
            {btn ? <span class={`${prefixCls}_btn`}>{renderHelper(btn)}</span> : null}
          </div>
        );
      }
    })
  })
}

const api: any = {
  open: create,
  close(key: string) {
    Object.keys(notificationInstances).forEach(cacheKey =>
      notificationInstances[cacheKey].removeNotice(key)
    );
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstances).forEach(cacheKey => {
      notificationInstances[cacheKey].destroy();
      delete notificationInstances[cacheKey]; // lgtm[js/missing-await]
    });
  },
};

const iconTypes: IconType[] = ['success', 'info', 'warning', 'error'];
iconTypes.forEach(type => {
  api[type] = (args: NotificationArgsProps) =>
    api.open({
      ...args,
      type,
    });
});

api.warn = api.warning;

export default api as NotificationApi;
