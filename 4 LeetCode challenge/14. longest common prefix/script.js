let strs = ["flower","flow","flight"];
// Methode One
// var longestCommonPrefix = function(strs) {
//     if (strs.length == 0){
//       return "";
//     }
//     let prefix = strs[0];
//     for(i = 1;i <strs.length;i++){
//       while(strs[i].indexOf(prefix) != 0){
//         prefix = prefix.substring(0,prefix.length - 1)
//       }
//     }
//     return prefix
// };
// Methode Two 
var longestCommonPrefix = function(strs) {
  let prefix = "";
  for(let i = 0;i < strs[0].length;i++){
    console.log(strs[0][i])
    for (let j = 0;j < strs.length;j++ ){
      if(strs[j][i] !== strs[0][i]){
        console.log(strs[j][i] !== strs[0][i])
        console.log(strs[j][i])
        return prefix
      }
    }
    prefix = prefix + strs[0][i];
  }
  return prefix
}
console.log(longestCommonPrefix(strs));

