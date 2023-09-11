/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

let xorOperation = function (n, start) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + i * 2);
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = answer ^ nums[i];
  }
  return answer;
};