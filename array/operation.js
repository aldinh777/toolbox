/**
 * Push item to array if not exists in that array
 *
 * @param {Array} array
 * @param {any} item
 */
export const pushNonExists = (array, item) => {
    if (array.indexOf(item) === -1) {
        array.push(item)
    }
}

/**
 * Remove item from an array if item exists in that array
 *
 * @param {Array} array
 * @param {any} item
 */
export const removeFromArray = (array, item) => {
    const index = array.indexOf(item)
    if (index !== -1) {
        array.splice(index, 1)
    }
}

/**
 * Swap items of an array
 *
 * @param {Array} array
 * @param {number} index1
 * @param {number} index2
 */
export const swapArray = (array, index1, index2) => {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}
