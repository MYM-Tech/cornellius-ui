import type { VNode } from 'vue';

export type Key = string | number;

export type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;

export type VueNode = VNodeChildAtom | VNodeChildAtom[] | JSX.Element;

export type MouseEventHandler = (e: MouseEvent) => void;

export interface ThenableArgument {
    (val: unknown): void;
}
