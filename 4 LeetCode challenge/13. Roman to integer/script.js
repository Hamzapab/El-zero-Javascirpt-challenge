
// var romanToInt = function(s) {
//     let basedArr = ["I","V","X","L","C","D","M"];
//     let sArr = s.split("")
//     console.log(sArr)
//     for (i=0;i<sArr.length;i++){
//       if(sArr[i] === basedArr[0]){
//         sArr[i] = 1;
//       }if(sArr[i] === basedArr[1]){
//         sArr[i] = 5;
//       }if(sArr[i] === basedArr[2]){
//         sArr[i] = 10;
//       }if(sArr[i] === basedArr[3]){
//         sArr[i] = 50;
//       }if(sArr[i] === basedArr[4]){
//         sArr[i] = 100;
//       }if(sArr[i] === basedArr[5]){
//         sArr[i] = 500;
//       }if(sArr[i] === basedArr[6]){
//         sArr[i] = 1000;
//       }
//     }
//     for (i=0;i<sArr.length;i++){
//       if (sArr[i] < sArr[i + 1]){
//         sArr[i] = -sArr[i] 
//       }
//     }
//     return sArr.reduce(function(pr,acu){
//       return pr + acu;
//     })
// };

// console.log(romanToInt("LVIII"))

var romanToInt = function(s){
    const map = {I: 1,V: 5,X: 10,L: 50, c: 100, D: 500,M:1000};
    let res = 0;
    s.split("").forEach((num,i) => {
      if (map[num] < map[s[i + 1]]){
        res -= map[num];
      }else {
        res += map[num];
      }
    });
    return res;
}
console.log(romanToInt("LVIII"))

