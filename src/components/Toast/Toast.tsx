import CorCheckIcon from '../Icons/CorCheckIcon/CorCheckIcon'
import Notifier from '../Notifier/Notifier';
import classNames from 'classnames';
import type { NotifierInstance } from '../Notifier/Notifier.types';
import type { ConfigDuration, ConfigOnClose, ConfigOptions, JointContent, NoticeType, ToastApi, ToastArgsProps, ToastType } from './Toast.types';
import type { Key, ThenableArgument } from '../../util/types';
import './Toast.module.scss'

// TODO: add config for position: top/bottom

let defaultPrefixCls = '_cor_toast';
let defaultDuration = 3;
let defaultTop: string;
let defaultTransitionName = 'move_up';
let hasTransitionName = true;
let defaultGetContainer = () => document.body;
let maxCount: number;
// Right to left
let rtl = false;
let toastInstance: NotifierInstance | null;
let key = 1;

export function getKeyThenIncreaseKey() {
  return key++;
}

function setToastConfig(options: ConfigOptions) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    toastInstance = null; // delete toastInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    defaultPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    defaultGetContainer = options.getContainer;
    toastInstance = null; // delete toastInstance for new getContainer
  }

  if (options.transitionName !== undefined) {
    defaultTransitionName = options.transitionName;
    toastInstance = null; // delete toastInstance for new transitionName
    hasTransitionName = true;
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    toastInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getToastInstance({
  appContext,
  prefixCls: customPrefixCls,
  rootPrefixCls,
  getPopupContainer: getContainer,
  transitionName = defaultTransitionName,
  closeIcon,
}: ToastArgsProps, callback: (i: NotifierInstance) => void) {
  if (toastInstance) {
    callback(toastInstance);
    return;
  }
  Notifier.newInstance(
    {
      appContext,
      prefixCls: customPrefixCls || defaultPrefixCls,
      rootPrefixCls: rootPrefixCls,
      transitionName,
      hasTransitionName,
      style: { top: defaultTop },
      getContainer: getContainer || defaultGetContainer,
      maxCount,
      closeIcon,
      name: 'toast',
    },
    (instance: any) => {
      if (toastInstance) {
        callback(toastInstance);
        return;
      }
      toastInstance = instance;
      callback(instance);
    },
  );
}

// TODO: update with actual icons
// maybe all of that should be in the korben project instead
const typeToIcon = {
  info: CorCheckIcon,
  success: CorCheckIcon,
  error: CorCheckIcon,
  warning: CorCheckIcon,
  loading: CorCheckIcon,
};

function create(args: ToastArgsProps): ToastType {
  const duration = args.duration !== undefined ? args.duration : defaultDuration;

  const target = args.key || getKeyThenIncreaseKey();
  const closePromise = new Promise(resolve => {
    const callback = () => {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };
    getToastInstance(args, instance => {
      instance.notify({
        key: target,
        duration,
        style: args.style || {},
        class: args.class,
        content: ({ prefixCls } : { prefixCls: string }) => {
          // TODO: if no args type put allow custom icon ?
          const Icon = args.type ? typeToIcon[args.type] : null;
          const iconNode = Icon ? <Icon /> : '';
          const toastClasses = classNames(`${prefixCls}_custom_content`, {
            [`${prefixCls}_${args.type}`]: args.type,
            [`${prefixCls}_rtl`]: rtl === true,
          });

          return (
            <div class={toastClasses}>
              {typeof args.icon === 'function' ? args.icon() : args.icon || iconNode}
              <span>{typeof args.content === 'function' ? args.content() : args.content}</span>
            </div>
          );
          // return (
          //   <div class={toastClasses}>
          //     {typeof args.icon === 'function' ? args.icon() : args.icon || iconNode}
          //     {
          //       typeof args.content === 'function' ?
          //         args.content() :
          //         (
          //           <span>{args.content}</span>
          //         )
          //     }
          //   </div>
          // );
        },
        onClose: callback,
        onClick: args.onClick,
      });
    });
  });
  const result: any = () => {
    if (toastInstance) {
      toastInstance.removeNotice(target);
    }
  };
  result.then = (filled: ThenableArgument, rejected: ThenableArgument) =>
    closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

function isArgsProps(content: JointContent): content is ToastArgsProps {
  return (
    Object.prototype.toString.call(content) === '[object Object]' &&
    !!(content as ToastArgsProps).content
  );
}

const api: any = {
  open: create,
  config: setToastConfig,
  destroy(toastKey?: Key) {
    if (toastInstance) {
      if (toastKey) {
        const { removeNotice } = toastInstance;
        removeNotice(toastKey);
      } else {
        const { destroy } = toastInstance;
        destroy();
        toastInstance = null;
      }
    }
  },
};

// attach specific toast type methods: success, error, ...
export function attachTypeApi(originalApi: ToastApi, type: NoticeType) {
  originalApi[type] = (
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({ content, duration, type, onClose });
  };
}

(['success', 'info', 'warning', 'error', 'loading'] as NoticeType[]).forEach(type =>
  attachTypeApi(api, type),
);

api.warn = api.warning;

export default api as ToastApi;
