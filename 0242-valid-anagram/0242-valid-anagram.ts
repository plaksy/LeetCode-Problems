function isAnagram(s: string, t: string): boolean {
    let S = s.split("").sort();
    let T = t.split("").sort();
    let sMap =  new Map();
    let tMap =  new Map();

    if(S.length !== T.length) {
        return false;
    }

    for (let i=0;i<S.length;i++){
        if(sMap.has(S[i])){
            sMap.set(S[i], sMap.get(S[i]) +1 )
        }
        else {
            sMap.set(S[i], 1)
        }


        if(tMap.has(T[i])){
            tMap.set(T[i], tMap.get(T[i]) +1 )
        }
        else {
            tMap.set(T[i], 1)
        }
    }
    
    let answer = true;
    sMap.forEach((value: boolean, key: number) => {
        if(tMap.get(key) !== value) {
            answer = false;
        }
    });

    return answer;
};