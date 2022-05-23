import { handleCloseEscKeyProps } from './handleCloseEscKey.type';

const handleCloseEscKey = ({ e, observer, callback }: handleCloseEscKeyProps) =>
    (e.key === 'Escape' && observer) ?? callback;

export default handleCloseEscKey;
