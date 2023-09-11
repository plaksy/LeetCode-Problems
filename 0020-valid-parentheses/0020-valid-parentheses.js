/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var buffer = [];
  var left = ["(", "{", "["];
  var right = [")", "}", "]"];

  for (var i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      buffer.push(right[left.indexOf(s[i])]);
    } else {
      if (buffer[buffer.length - 1] == s[i]) {
        buffer.pop();
      } else if (buffer.length == 0) {
        return false;
      } else {
        return false;
      }
    }
  }
  return buffer.length == 0;
};