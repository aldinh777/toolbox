/**
 * Execute thing and see how long it takes
 */
export const benchmarkTime: (
    executor: Function,
    callback: (ms: number, startTime: Date, endTime: Date) => void
) => void;
