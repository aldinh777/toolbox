export const generateArray = (length = 0, generator) => [...Array(length)].map(() => generator?.());
