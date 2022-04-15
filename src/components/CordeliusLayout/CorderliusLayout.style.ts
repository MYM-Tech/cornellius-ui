import { css } from '@emotion/css';
import colors from '../../utils/colors';

export const mainLayoutStyle = css({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
});

export const mainCenterStyle = css({
    maxWidth: 942,
    width: 940,
    height: '100vh',
    border: `1px solid ${colors.grey[2]}`,
    display: 'flex',
});

export const reverseStyle = css({
    flexDirection: 'row-reverse',
});
