/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  var palindrome = Number(String(x).split("").reverse().join(""));
  return x==palindrome;
};