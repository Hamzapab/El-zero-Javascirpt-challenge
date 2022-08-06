/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

for (i = 0; i< myFriends.length;i++){
    if (chosen === i + 1){
        let  {title : t, age : g, available: av, skills:[one,two]} = myFriends[i]
        print(t,g,av,two);
    }
}

function print(t,g,av,two){
console.log(t)
console.log(g)
console.log(`${av == true ? "":"not"} avialable`)
console.log(two)
}

