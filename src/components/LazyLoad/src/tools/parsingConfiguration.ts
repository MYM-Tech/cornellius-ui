import { baseConfig } from '../config/config';
import { parsingConfigurationResult, valueInput } from '../interfaces/config';

export default function parsingConfiguration(
    value: valueInput | string
): parsingConfigurationResult {
    let src = value as string;
    let loadingUrl = baseConfig.loadingImageUrl;
    let errorUrl = baseConfig.errorImageUrl;
    let { lifecycle } = baseConfig;
    if (
        typeof value === 'function' ||
        (toString.call(value) === '[object Object]' && typeof value !== 'string')
    ) {
        src = value.src;
        loadingUrl = value.loadingUrl || loadingUrl;
        errorUrl = value.errorUrl || errorUrl;
        lifecycle = value.lifecycle || lifecycle;
    }
    return { src, loadingUrl, errorUrl, lifecycle };
}
