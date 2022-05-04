import { baseConfig } from "../config/config";
import { propsInterface } from "../interfaces/config";
import { mergeValues } from "../tools/mergeValue";


export const handlerInitialConfig = (value: propsInterface) =>{
    return mergeValues(baseConfig, value)
}