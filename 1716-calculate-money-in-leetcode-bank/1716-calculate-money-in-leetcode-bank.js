/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    var endDays = n % 7;
    var weeks = (n - endDays) / 7;
    
    var endAdd = weeks + 1;
    var sum = 0;
    var endSum = 0;
    for (var i = 0; i < weeks; i++) {
        sum += 28 + i * 7;
    }

    for(var i = 0; i<endDays;i++){
        console.log(endSum);
        endSum += (endAdd+i);

    }
    return sum+endSum;
};