function productExceptSelf(nums: number[]): number[] {
    
    let len = nums.length;
    let answer = new Array(len);
    let prefix = 1;
    let postfix = 1;


    for(let i = 0; i < len; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    for(let i = len - 1; i > -1; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }
    
    return answer;
};