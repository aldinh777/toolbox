import { randomString } from '../random/common.js';

export default class ObjectMapper {
    _objs = new Map();
    _keys = new WeakMap();
    delete(key) {
        const object = this._objs.get(key);
        this._objs.delete(key);
        if (object) {
            this._keys.delete(object);
        }
    }
    clear() {
        this._objs.forEach((obj) => this._keys.delete(obj));
        this._objs.clear();
    }
    getKey(object) {
        const key = this._keys.get(object);
        if (key) {
            return key;
        }
        let generatedKey = randomString(6);
        while (this._objs.has(generatedKey)) {
            generatedKey += randomString();
        }
        this._objs.set(generatedKey, object);
        this._keys.set(object, generatedKey);
        return generatedKey;
    }
    getObject(key) {
        return this._objs.get(key);
    }
}
