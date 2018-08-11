import isObject from './isObject';
import {PlainObject} from './types';

/**
 * @name pluckDeep
 * @param {obj} Object
 * @returns {any}
 * @since 1.0.0
 * @section
 * @example
 */
const pluckDeep = (obj: PlainObject): any => {
  const keys = Object.keys(obj);
  return (key: string) => {
    for (let i = 0; i < keys.length; i++) {
      const currKey = keys[i];
      if (currKey === key) {
        return obj[key];
      }

      if (isObject(obj[currKey])) {
        const plucked = pluckDeep(obj[currKey])(key);
        if (plucked) {
          return plucked;
        }
      }
    }

    return null;
  };
};

export default pluckDeep;
