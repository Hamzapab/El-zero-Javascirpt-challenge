const mat = [[1,0,0,0],
[1,1,1,1],
[1,0,0,0],
[1,0,0,0]];
const k = 2;

var kWeakestRows = function(mat, k) {
  let Soldmap = new Map();
  for(let i = 0; i < mat.length;i++){
    let val = mat[i].reduce((a,b)=> a+b);
    Soldmap.set(i,val);
  }
  const mapSort = new Map([...Soldmap.entries()].sort((a, b) => a[1] - b[1]));
  let soldarr = Array.from(mapSort.keys())
  return  soldarr.slice(0,k);
};

console.log(kWeakestRows(mat, k))