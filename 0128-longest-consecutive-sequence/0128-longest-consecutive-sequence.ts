function longestConsecutive(nums: number[]): number {

let set = new Set(nums)
let answer = 0;

set.forEach((val) => {
    if(!set.has(val-1)) {
        let length = 0;
        while (set.has(val+length)) {
            length += 1;
        }
        answer = Math.max(length,answer);
    }
});

return answer;

};