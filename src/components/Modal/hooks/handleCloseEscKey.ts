import { handleCloseEscKeyProps } from './handleCloseEscKey.type';

const handleCloseEscKey = ({ e, observer, callback }: handleCloseEscKeyProps) => {
    if (e.key === 'Escape' && observer) {
        callback();
    }
};

export default handleCloseEscKey;
