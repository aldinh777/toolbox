export default class ObjectMapper<T extends object> {
    protected _objs: Map<string, T>;
    protected _keys: WeakMap<T, string>;
    delete(key: string): void;
    clear(): void;
    getKey(object: T): string;
    getObject(key: string): T | undefined;
}
