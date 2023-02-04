import ObjectMapper from './ObjectMapper.js';

export default class ObjectValueMapper extends ObjectMapper {
    _vals = new Map();
    delete(key) {
        super.delete(key);
        this._vals.delete(key);
    }
    clear() {
        super.clear();
        this._vals.clear();
    }
    setValue(key, value) {
        if (this._objs.has(key)) {
            this._vals.set(key, value);
        }
    }
    getValue(key) {
        return this._vals.get(key);
    }
    setValueByObject(object, value) {
        const key = this.getKey(object);
        this.setValue(key, value);
    }
    getValueByObject(object) {
        if (this._keys.has(object)) {
            const key = this.getKey(object);
            return this.getValue(key);
        }
    }
}
