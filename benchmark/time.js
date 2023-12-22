export const benchmarkTime = (executor, callback) => {
    const start = new Date();
    executor();
    const end = new Date();
    const time = end - start;
    callback?.(time, start, end);
};
