/**
 * Push item to array if not exists in that array
 */
export function pushNonExists<T>(array: T[], item: T) {
    if (array.indexOf(item) === -1) {
        array.push(item);
    }
}

/**
 * Remove item from an array if item exists in that array
 */
export function removeFromArray<T>(array: T[], item: T) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

/**
 * Swap items of an array
 */
export function swapArray<T>(array: T[], index1: number, index2: number) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
