let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,B,_,S,c,h,o,o,l,2,0,Z";


let solution = myString.split(",").filter(function (ele){
    return isNaN(+ele);
}).map(function(ele){
    ele === "_" ? 
    ele = " ":
    ele = ele;
    return ele
}).reduce(function(pre , ac){
    return pre + ac
}).slice(true , -myString.split("").shift())
console.log(solution); // Elzero Web School
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];


