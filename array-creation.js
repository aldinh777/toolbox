export const createArray = (length = 0, generator) => [...Array(length)].map((_, index) => generator?.(index))

export const range = (start, end) => createArray(end - start + 1, (index) => index + start)
