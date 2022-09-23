let  accounts = [[1,5],[7,3],[3,5]];

// var maximumWealth = function(accounts) {
//   let wealth = [];
//   // get the sum of each wealth in each bank;
//   for(let i = 0;i < accounts.length;i++){
//     wealth.push(accounts[i].reduce((a,b)=>a+b));
//   }
//   // get the biggest wealth;
//   let biggestWealth = wealth[0];
//   for(let i = 0;i < wealth.length;i++){
//     if(wealth[i] > biggestWealth) biggestWealth = wealth[i]
//   }
//   return biggestWealth;
// };
// methode 02;
var maximumWealth = function(accounts) {
  let maxW = 0;
  for(let i = 0;i < accounts.length;i++){
    let currentW = 0;
    for(let j = 0; j < accounts[i].length;j++){
        currentW += accounts[i][j]
    }
    if( currentW > maxW) maxW = currentW;
  }
  return maxW
};

console.log(maximumWealth(accounts));
