function longestConsecutive(nums: number[]): number {

if (nums.length == 0) {return 0; }    
let arr = nums.sort((a,b) => a-b);
let set = new Set(arr)

let check = arr[0];
let count = 1;
let max = 1;


set.forEach((value) => {
    if(value == check + 1) {
        count += 1;
    }
    else {
        count = 1;
    }
    check = value;
    if (count > max) { max = count; }
});

return max;

};