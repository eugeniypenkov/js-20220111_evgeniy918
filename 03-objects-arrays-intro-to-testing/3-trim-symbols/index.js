/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export const trimSymbols = (string, size) => {
  if (size === 0) { return ''; }
  if (size === undefined) { return string; }

  let count = 0;
  const result = [];

  for (const char of string) {
    if (result[result.length - 1] === char) {
      if (count < size) {
        result.push(char);
        count += 1;
      }
    } else {
      count = 1;
      result.push(char);
    }
  }

  return result.join('');
};
