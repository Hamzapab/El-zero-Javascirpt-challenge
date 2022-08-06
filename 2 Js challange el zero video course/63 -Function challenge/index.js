// function showD(a ="unknow", b ="unkown", c){
//     let list = [a , b , c ];
//     let t = "You are available for this work";
//     let f = "You are Not available for this work"
//     for (let i = 0; i < list.length; i++){
//         if (typeof(list[i]) === typeof("a")){
//             for (j = 0; j < list.length; j++){
//                 if (typeof(list[j]) === typeof(1)){
//                     for (z = 0; z < list.length; z++){
//                         if (list[z] === true){
//                             console.log(`Hello ${list[i]}, Your age is ${list[j]},${t}`)
//                         } else if (list[z] === false) {
//                             console.log(`Hello ${list[i]}, Your age is ${list[j]}, ${f}`)
//                         }
//                     } 
//                 }
//             }
//         }
//     }
// }
// showD(  false, 38, "Hamza")
function showD(a ="unknow", b ="unkown", c){
    let list = [a , b , c ];
    let name;
    let age;
    let t;
    let f = "You are Not available for this work"
    for (let i = 0; i < list.length;i++){
        typeof(list[i]) === typeof("a") ?
        name = list[i] : name;
    }
    for (let j = 0; j < list.length;j++){
        typeof(list[j]) === typeof(2) ?
        age = list[j] : age;
    }
    for (let z = 0 ; z < list.length;z++){
        list[z] === true ?
        t = "You are available for this work"
        : list[z] === false ? 
        t = "You are Not available for this work"
        : t ;
    }
    console.log(`Your name is ${name}, Your age is ${age},${t}`)
}
showD(  38,false,"Hamza")
showD(  true,38,"Hamza")
showD(  "Hamza", 38,false)
showD(  true,"Hamza",38)
