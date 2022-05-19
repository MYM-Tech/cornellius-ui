import { baseConfig } from '../config/config';
import { PropsInterface } from '../interfaces/config.type';
import mergeValues from '../tools/mergeValue';

/**
 *
 * @param value { PropsInterface }
 * @returns
 */

const handleInitialConfig = (value: PropsInterface) => mergeValues(baseConfig, value);

export default handleInitialConfig;
