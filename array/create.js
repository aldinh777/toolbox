export const createArray = (length = 0, generator) => [...Array(length)].map(() => generator?.());
