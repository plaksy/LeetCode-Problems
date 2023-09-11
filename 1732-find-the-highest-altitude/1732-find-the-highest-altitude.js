/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  var higher = 0;
  var buff = [0];
  for (var i = 0; i < gain.length; i++) {
    buff.push(buff[i] + gain[i]);
    if (buff[i + 1] > higher) {
      higher = buff[i + 1];
    }
  }
  return higher;
};