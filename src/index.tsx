import './global.scss';

import { Card } from './components/Card/Card';
import { Content } from './components/LayoutSystem/Content/Content';
import { MainLayout } from './components/LayoutSystem/MainLayout/MainLayout';
import { Sidebar } from './components/LayoutSystem/Sidebar/Sidebar';
import CorInputText from './components/Inputs/CorInputText/CorInputText';
import CorInputNumber from './components/Inputs/CorInputNumber/CorInputNumber';
import CorTextarea from './components/Inputs/CorTextarea/CorTextarea';
import CorInputRadio from './components/Inputs/CorInputRadio/CorInputRadio';
import CorInputCheckbox from './components/Inputs/CorInputCheckbox/CorInputCheckbox';
import CorInputMoney from './components/Inputs/CorInputMoney/CorInputMoney';
import { CorModal, handleModalState } from './components/Modal/CorModal/CorModal';
import { CorModalProps } from './components/Modal/CorModal/CorModal.type';
import CorButton from './components/CorButton/CorButton';
import CorInputTime from './components/Inputs/CorInputTime/CorInputTime';
import CorInputSwitch from './components/Inputs/CorInputSwitch/CorInputSwitch';
import notification from './components/Notification/Notification';
import {
    NotificationArgsProps,
    NotificationApi,
} from './components/Notification/Notification.types';

export {
    Card,
    Content,
    MainLayout,
    Sidebar,
    CorButton,
    CorInputText,
    CorInputNumber,
    CorTextarea,
    CorInputRadio,
    CorInputCheckbox,
    CorInputMoney,
    CorModal,
    handleModalState,
    CorInputTime,
    CorInputSwitch,
    notification,
};

export type { NotificationApi, NotificationArgsProps, CorModalProps };
