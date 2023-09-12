function isValidSudoku(board: string[][]): boolean {
    
let rows = new Map();
let cols = new Map();
let cubes = new Map();

for(let i = 0; i< 9; i ++) {
    rows.set(i,new Set());
    cols.set(i,new Set());
    for (let j = 0; j< 9; j++){
        let iCube = Math.floor(i/3) * 10;
        let jCube = Math.floor(j/3);
        cubes.set(iCube+jCube,new Set());
    }
}

let k=0;
for(let i = 0; i<9; i++){
    for(let j=0; j<9; j++){
        let IJelem = board[i][j];

        if(IJelem != '.') {
            
            let iCube = Math.floor(i/3) * 10;
            let jCube = Math.floor(j/3);
            
            if (rows.get(i).has(IJelem) || 
                cols.get(j).has(IJelem) || 
                cubes.get(iCube+jCube).has(IJelem)) {
                return false;
            }
            
            rows.get(i).add(IJelem);
            cols.get(j).add(IJelem);

            cubes.get(iCube+jCube).add(IJelem);
        }
    }
}
return true;


};