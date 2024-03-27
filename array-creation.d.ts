/**
 * Generate array with fixed length and generate some value with it
 */
export const createArray: <T>(length?: number, generator?: () => T) => T[]

/**
 * Generate array with range [start, start+1, start+2, ..., end]
 */
export const range: (start: number, end: number) => number[]
