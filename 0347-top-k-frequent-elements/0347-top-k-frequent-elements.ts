function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map;
    let answer = [];

    nums.forEach((elem) => {
        map.has(elem)? map.set(elem,map.get(elem) + 1): map.set(elem,1); 
    });

    map = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))

    let counter = 0;
    for (let key of map.keys()) {
        if (counter == k) {
            break;
        }
        counter += 1;
        answer.push(key);
    }

    return answer;
};