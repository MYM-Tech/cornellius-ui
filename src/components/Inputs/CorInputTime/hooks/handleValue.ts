import handleMaxTime from './handleMaxTime';
import { parsingValue } from './handleState';

const handleValue = (e: FocusEvent) => handleMaxTime(parsingValue(e), 23);

export default handleValue;