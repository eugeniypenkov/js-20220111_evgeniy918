/**
 * createGetter - function which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArray = path.split('.');

  return obj => {
    let result = obj;

    const getValue = index => {
      if (index === pathArray.length || result === undefined) {
        return result;
      }

      result = result[pathArray[index]];

      return getValue(index + 1);
    };

    return getValue(0);
  };
};
