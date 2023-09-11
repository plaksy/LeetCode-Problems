/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var arr = s.trim().split(" ");
  var answer = 0;
  var nonWord = "1234567890!@#$%^&*()_+-={[/;:.><,?|`~]}\\\"\'";
  for (var i = arr.length - 1; i >= 0; i--) {
    var isWord = true;
    for (var j = 0; j < arr[i].length; j++) {
      if (nonWord.includes(arr[i][j])) {
        isWord= false;
      }
    }
    if(isWord) return arr[i].length;
  }
  return answer
};