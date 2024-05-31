/**
 * Generate array with fixed length and generate some value with it
 */
export function createArray(length = 0, generator) {
    return [...Array(length)].map((_, index) => generator?.(index));
}

/**
 * Generate array with range [start, start+1, start+2, ..., end]
 */
export function range(start, end) {
    return createArray(end - start + 1, (index) => index + start);
}
