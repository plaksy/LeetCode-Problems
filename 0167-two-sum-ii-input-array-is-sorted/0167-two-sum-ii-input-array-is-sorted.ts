function twoSum(numbers: number[], target: number): number[] {
    
let l = 0;
let r = numbers.length-1;

while (l < r) {
    for(let i = r; i>l; i--) {
        if(numbers[l] + numbers[i] == target) {
            return [l+1, i+1];
        }
    }
    l += 1;
}


};