/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  var leftIndex = 0;
  var rightIndex = nums.length - 1;
  var cutted = 0;
  while (leftIndex <= rightIndex) {
    cutted = Math.floor((rightIndex + leftIndex) / 2);
    if (rightIndex - leftIndex <= 3) {
      var answer = 0;
      for (var i = leftIndex; i <= rightIndex; i++) {
        if (nums[i] == target) {
          answer = i;
        } else if (nums[i] < target) {
          answer = i + 1;
        } else {
          break;
        }
      }
      return answer;
    } else if (target > nums[cutted]) {
      leftIndex = cutted;
    } else {
      rightIndex = cutted;
    }
  }
};