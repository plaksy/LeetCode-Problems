/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  var forward = [];
  var back = [];
  var l = height.length;
  var forwardWall = height[0];
  var backWall = height[l - 1];

  for (var i = 0; i < l; i++) {
    if (height[i] > forwardWall) forwardWall = height[i];
    forward.push(forwardWall - height[i]);
  }
  for (var j = l - 1; j >= 0; j--) {
    if (height[j] > backWall) backWall = height[j];
    back.push(backWall - height[j]);
  }
  back = back.reverse();

  var answer = 0;
  for (var i = 0; i < forward.length; i++) {
    answer +=forward[i] < back[i] ? forward[i] : back[i];
  }
  return answer;
};