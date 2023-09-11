/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var answer = 0;
  s = s.split("");
  var nums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (var i = 0; i < s.length; i++) {
    if (nums[s[i + 1]] > nums[s[i]]) {
      answer += nums[s[i + 1]] - nums[s[i]];
      i++;
    } else {
      answer += nums[s[i]];
    }
  }
  return answer;
};