function isValid(s: string): boolean {
    
    let map = new Map();
    map.set('}','{');
    map.set(']','[');
    map.set(')','(');

    let stack = [];

    for(const  char of s) {
        if(map.has(char)) {
            if(stack.length>0 && stack[stack.length-1]==map.get(char)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    
    }
    return stack.length == 0;

};