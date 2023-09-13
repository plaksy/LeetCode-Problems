function isPalindrome(s: string): boolean {

let alphabetANDnumber= new Set([
'a', 'b', 'c', 'd', 'e', 'f',
'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x',
'y', 'z', 'A', 'B', 'C', 'D',
'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M', 'N', 'O', 'P',
'Q', 'R', 'S', 'T', 'U', 'V',
'W', 'X', 'Y', 'Z', '0', '1',
'2', '3', '4', '5', '6', '7',
'8', '9' ]);

let buffer = "";

for (const char of s) {
    if(alphabetANDnumber.has(char)){
        buffer += char.toLowerCase();
    }
}

let j = buffer.length-1;
for(let i = 0; i<Math.ceil(buffer.length/2); i++) {
    if(buffer[i] != buffer[j]) return false
    j -= 1;
}

return true;
};