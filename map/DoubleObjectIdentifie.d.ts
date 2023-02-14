import ObjectIdentifier from './ObjectIdentifier';

export default class DoubleObjectIdentifier<
    T extends object,
    U extends object
> extends ObjectIdentifier<T> {
    protected _objs2: WeakMap<T, U>;
    protected _keys2: WeakMap<U, string>;
    setSecondaryObject(key: string, secondaryObject: U): void;
    getSecondaryObject(key: string): U | undefined;
    getSecondaryObjectKey(secondaryObject: U): string | undefined;
}
