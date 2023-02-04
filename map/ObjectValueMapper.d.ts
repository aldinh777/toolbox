import ObjectMapper from './ObjectMapper';

export default class ObjectValueMapper<T extends object, V> extends ObjectMapper<T> {
    protected _vals: Map<string, V>;
    setValue(key: string, value: V): void;
    getValue(key: string): V | undefined;
    setValueByObject(object: T, value: V): void;
    getValueByObject(object: T): V | undefined;
}
