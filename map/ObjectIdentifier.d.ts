export default class ObjectIdentifier<T extends object> {
    protected _objs: Map<string, T>;
    protected _keys: WeakMap<T, string>;
    getKey(object: T): string;
    getObject(key: string): T | undefined;
    deleteKey(key: string): void;
    private _generateRandomKey(): string;
}
