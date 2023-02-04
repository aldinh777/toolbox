/**
 * Push item to array if not exists in that array
 */
export function pushNonExists<T>(array: T[], item: T): void;

/**
 * Remove item from an array if item exists in that array
 */
export function removeFromArray<T>(array: T[], item: T): void;

/**
 * Swap items of an array
 */
export function swapArray<T>(array: T[], index1: number, index2: number): void;
