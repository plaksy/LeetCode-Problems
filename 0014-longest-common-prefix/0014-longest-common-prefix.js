/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var subStr = "";
  var oldStr = "";
  var answer = "";
  if(strs.length == 0) return answer;
  
  for (var i = 0; i < strs[0].length; i++) {
    subStr += strs[0].split("").join("")[(0, i)];
    for (var j = 0; j < strs.length; j++) {
      if (strs[j].startsWith(subStr)) {
        answer = subStr;
      } else {
        answer = oldStr;
        return oldStr;
      }
    }
    oldStr += strs[0].split("").join("")[(0, i)];
  }
  return answer;
};