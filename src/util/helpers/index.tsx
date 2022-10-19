import { VueNode } from '../types';

export function renderHelper<T = Record<string, unknown>>(
    node: VueNode | ((arg0: T) => VueNode),
    props?: T,
    defaultNode?: VueNode
) {
    if (typeof node === 'function') {
        return node(props || ({} as T));
    }

    if (typeof node === 'string' || typeof node === 'number') {
        return <span>{node}</span>;
    }

    return node ?? defaultNode;
}
