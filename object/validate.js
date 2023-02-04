export const has = (obj, ...keys) =>
    keys.every((key) => typeof obj === 'object' && Reflect.has(obj, key));
