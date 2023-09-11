function getAverages(nums: number[], k: number): number[] {
    const AVRG_LENGTH = k * 2 + 1;
    const N = nums.length;
    let avgs = [];
    for (let i = 0; i < nums.length; i++) {
        if ( i < k || (N  - i) <= k ) {
            avgs.push(-1.);
        }
        else {
            let subArraySum = 0;
            for(let j = i - k; j <= i + k; j++) {
                subArraySum += nums[j];
            }
            avgs.push(Math.trunc(subArraySum / AVRG_LENGTH))
        }
    }
    return avgs;
};