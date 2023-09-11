/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;
  if (digits[digits.length - 1] == 10) {
    for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] == 10) {
        digits[i] = 0;
        if (i != 0) {
          digits[i - 1]++;
        } else {
          return [1].concat(digits);
        }
      }
    }
  }
  return digits;
};