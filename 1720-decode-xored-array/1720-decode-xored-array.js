/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  var answer = [first];
  for (var i = 0; i < encoded.length; i++) {
    first = first^encoded[i];
    answer.push(first);
  }
  return answer;
};