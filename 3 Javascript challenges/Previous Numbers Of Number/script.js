function  getPreviousNumbers(num){
  if(num === 0 || num < 0) console.log("Negative Numbers & Zero Not Allowed");
  else if(num > 10){
    let result =[num];
    for(let i = num; i > 0 ; i--){
      if(i % 2 === 0){
          result.push(i)
      }
    }
    result = +result.join("")
    console.log(result)
  }else if(num <= 10){
    let result =[];
    for(let i = num; i > 0 ; i--){
      result.push(i)
    }
    result = +result.join("")
    console.log(result)
  }
}

getPreviousNumbers(0); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(-20); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(10); // 10987654321
getPreviousNumbers(17); // 17161412108642