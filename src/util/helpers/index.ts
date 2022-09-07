import { VueNode } from '../types';

export function renderHelper<T = Record<string, any>>(
    node: VueNode | ((arg0: T) => VueNode),
    props?: T,
    defaultNode?: any,
) {
    if (typeof node === 'function') {
        return node(props || ({} as T));
    }
    return node ?? defaultNode;
}
