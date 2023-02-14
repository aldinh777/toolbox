import ObjectIdentifier from './ObjectIdentifier';

export default class DoubleObjectIdentifier extends ObjectIdentifier {
    _keys2 = new WeakMap();
    _objs2 = new WeakMap();
    setSecondaryObject(key, secondaryObject) {
        const primaryObject = this._objs.get(key);
        if (primaryObject) {
            this._objs2.set(primaryObject, secondaryObject);
            this._keys2.set(secondaryObject, key);
        }
    }
    getSecondaryObject(key) {
        const primaryObject = this._objs.get(key);
        if (primaryObject) {
            return this._objs2.get(primaryObject);
        }
    }
    getSecondaryObjectKey(secondaryObject) {
        return this._keys2.get(secondaryObject);
    }
    deleteKey(key) {
        const primaryObject = this._objs.get(key);
        if (primaryObject) {
            const secondaryObject = this._objs2.get(primaryObject);
            if (secondaryObject) {
                this._keys2.delete(secondaryObject);
            }
            this._objs2.delete(primaryObject);
        }
        super.deleteKey(key);
    }
}
