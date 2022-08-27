let num = 8;

var numberOfSteps = function(num) {
  let step = 0;
  while(num != 0){
    if(num % 2 === 0)num = num / 2;
    else if(num % 2 !== 0)num = num - 1;
    step++
  }
  return step
};
console.log(numberOfSteps(num))