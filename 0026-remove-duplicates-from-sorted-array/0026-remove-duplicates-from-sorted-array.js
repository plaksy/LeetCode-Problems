/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => {
  if (nums.length <= 1) return nums.length;
  let i = 1;
  while (i < nums.length) {
    nums[i] === nums[i - 1] ? nums.splice(i, 1) : i++;
  }
  return nums.length;
};