export {default as Http} from './Http';
export {default as Cookie}from './Cookie';
export {addEvent, removeEvent, closest} from './Event'
export function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
export const pxToVw = (px) => {
    if (!px) return '';
    return px / 3.75 + 'Vw'
};

export function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
}
export function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}
export function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
export function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (isArrayLike(value)) {
        return !value.length;
    } else if (isPlainObject(value)) {
        for (let key in value) {
            if (hasOwnProperty.call(value, key)) {
                return false;
            }
        }
    }
    return false;
}
function extend(to, _from) {
    for(let key in _from) {
        to[key] = _from[key];
    }
    return to
}