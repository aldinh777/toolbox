/**
 * Generate random number with specific range, from 0 to range - 1
 */
export function randomInt(range: number = 10): number {
    return Math.floor(Math.random() * range);
}

/**
 * Return random item of an array
 */
export function randomItem<T>(array: ArrayLike<T>): T {
    return array[randomInt(array.length)];
}

const defaultCharset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Generate random string with fixed length
 */
export function randomString(length: number = 1, characters: string = defaultCharset): string {
    let result = '';
    for (let index = 0; index < length; index++) {
        result += randomItem(characters);
    }
    return result;
}
