function twoSum(nums: number[], target: number): number[] {
    let numsMap = new Map();
    for(let i=0; i<nums.length;i++){
        if (numsMap.has(target - nums[i])) {
            return([i,numsMap.get(target - nums[i])])
        }
        else numsMap.set(nums[i],i);

    }
};