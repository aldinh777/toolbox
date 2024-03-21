/**
 * @callback resultHandler
 * @param {number} ms
 * @param {Date} startTime
 * @param {Date} endTime
 */

/**
 * Execute thing and see how long it takes
 * 
 * @param {Function} executor 
 * @param {resultHandler} callback 
 */
export const benchmarkTime = (executor, callback) => {
    const start = new Date();
    executor();
    const end = new Date();
    const time = end - start;
    callback?.(time, start, end);
};
