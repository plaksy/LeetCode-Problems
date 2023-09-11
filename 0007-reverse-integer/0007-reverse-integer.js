/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num) {
    const sign = num > 0 ? 1 : -1 ;
    num = String(Math.abs(num));
    let res = Number( num.split('').reverse().join('') );
    return res > Math.pow(2, 31) ? 0 : res*sign;
};