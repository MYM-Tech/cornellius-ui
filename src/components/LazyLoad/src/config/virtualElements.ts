import { ExtComponentPublicInstance } from "../interfaces/Element"

export const parentElemennt = new Set()
export const lazyVmMap = new Map<string, Set<ExtComponentPublicInstance>>()
export const ArrayElements = new WeakMap<HTMLElement>()