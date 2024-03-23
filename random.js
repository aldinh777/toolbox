/**
 * Generate random number with specific range
 *
 * @param {number} range
 * @returns {number}
 */
export const randomNumber = (range = 10) => parseInt(Math.random() * range)

/**
 * Return random item of an array
 *
 * @template T
 * @param {Array.<T>} array
 * @returns {T}
 */
export const randomItem = (array = []) => array[randomNumber(array.length)]

/**
 * Generate random string with fixed length
 *
 * @param {number} length
 * @param {string} characters
 * @returns {string}
 */
export const randomString = (
    length = 1,
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) => {
    let result = ''
    for (let index = 0; index < length; index++) {
        result += randomItem(characters)
    }
    return result
}
