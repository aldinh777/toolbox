import { randomString } from '../random/common.js';

export default class ObjectIdentifier {
    _objs = new Map();
    _keys = new WeakMap();
    getKey(object) {
        const otype = typeof object;
        if (!object || (otype !== 'object' && otype !== 'function')) {
            throw Error('not a valid object');
        }
        if (this._keys.has(object)) {
            return this._keys.get(object);
        }
        const generatedKey = this._generateKey();
        this._objs.set(generatedKey, object);
        this._keys.set(object, generatedKey);
        return generatedKey;
    }
    getObject(key) {
        return this._objs.get(key);
    }
    deleteKey(key) {
        const object = this._objs.get(key);
        if (object) {
            this._keys.delete(object);
            this._objs.delete(key);
        }
    }
    _generateKey() {
        let generatedKey = randomString(4);
        while (this._objs.has(generatedKey)) {
            generatedKey += randomString();
        }
        return generatedKey;
    }
}
