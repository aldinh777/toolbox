/**
 * Execute thing and see how long it takes
 */
export function benchmark(executor: () => void): number {
    const start = performance.now();
    executor();
    const end = performance.now();
    return end - start;
}

/**
 * Execute thing asynchronously and see how long it takes
 */
export async function benchmarkAsync(executor: () => Promise<void>): Promise<number> {
    const start = performance.now();
    await executor();
    const end = performance.now();
    return end - start;
}
