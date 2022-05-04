import { baseConfig } from '../config/config';
import { propsInterface } from '../interfaces/config';
import mergeValues from '../tools/mergeValue';

const handleInitialConfig = (value: propsInterface) => mergeValues(baseConfig, value);

export default handleInitialConfig;
