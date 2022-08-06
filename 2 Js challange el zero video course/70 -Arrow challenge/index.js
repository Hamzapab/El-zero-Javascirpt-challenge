
// let names = (...name) => {
//     for (i = 0; i < name.length;i++) {
//         name[i] = `[${name[i]}]`
//     }
//     return `String ${name} => Done !`
// };
// console.log(names("hamza", "ossama" , "ahmed", "maroua"))

// Exo 02
// let myNumbers = [20, 50, 10, 60];

// let calc = (num1, num2) => num1 + num2; 


// console.log(calc(10, myNumbers[0] + myNumbers[1]))

// let myNumbers = [20, 50, 10, 60];

// let calc = function (num1, num2) {
//     return num1 + num2; 
// }


// console.log(calc(10, myNumbers[0] + myNumbers[1]))

let ignumb = "12HA56m32za43";

let ign = ignumb.split("").map((ele) => isNaN(ele)? ele  : "").join("");
console.log(ign);


