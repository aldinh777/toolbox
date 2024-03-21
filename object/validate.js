/**
 * Checks if an object has any specified keys
 *
 * @param {any} obj
 * @param  {...string} keys
 * @returns {boolean}
 */
export const has = (obj, ...keys) => keys.every((key) => obj && typeof obj === 'object' && Reflect.has(obj, key));
