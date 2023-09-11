/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack.length == 0) {
    if (needle.length == 0) {
      return 0;
    } else return -1;
  }
  return haystack.indexOf(needle);
};