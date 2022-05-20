import { handleCloseEscKeyProps } from './handleCloseEscKey.type';
import handleModalState from './handleModalState';

const handleCloseEscKey = ({ e, observer }: handleCloseEscKeyProps) => {
    if (e.key === 'Escape' && observer) handleModalState.close();
};

export default handleCloseEscKey;
