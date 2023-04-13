const has = (obj, ...keys) =>
    keys.every((key) => obj && typeof obj === 'object' && Reflect.has(obj, key));

module.exports = { has };
