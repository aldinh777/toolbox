/**
 * @template T
 * @callback supplier
 * @param {number} index
 * @returns {T}
 */

/**
 * Generate array based on generator input
 *
 * @template T
 * @param {number} length
 * @param {supplier.<T>} generator
 * @returns {Array.<T>}
 */
export const createArray = (length = 0, generator) => [...Array(length)].map((_, index) => generator?.(index));

/**
 * Generate array with range [start, start+1, start+2, ..., end]
 *
 * @param {number} start
 * @param {number} end
 * @returns
 */
export const range = (start, end) => createArray(end - start + 1, (index) => index + start);
