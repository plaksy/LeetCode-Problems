function twoSum(numbers: number[], target: number): number[] {
    

let l = 0;
let r = numbers.length-1;

while (l < r) {
    let current = numbers[l] + numbers[r];
    if(current > target) {
        r -= 1;
    }
    else if(current < target){
        l += 1;
    }
    else {
        return [l+1,r+1];
    }
}

};