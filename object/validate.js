export const has = (obj, ...keys) => keys.every((key) => Reflect.has(obj, key));
