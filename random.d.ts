/**
 * Generate random number with specific range
 */
export const randomNumber: (range: number) => number

/**
 * Return random item of an array
 */
export const randomItem: <T>(array: T[]) => T

/**
 * Generate random string with fixed length
 */
export const randomString: (length?: number, characters?: string) => string
