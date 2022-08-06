let myAdmin = ["Ahmed", "Osama", "Sayed", "stop", "Samara"];
let myEmpolyees = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let counterOne = 0;
let counterTwo = 0;
let counterThree = 0;


for (i = 0; i < myAdmin.length; i++){
if (myAdmin[i] === "stop"){
    break;
}
}
document.write(`<h2> We have ${[i]} Admins </h2>`)

for (i = 0; i < myAdmin.length;i++){
    if (myAdmin[i] === "stop"){
        break;
    }
    document.write('<hr>')
    document.write(`<div> The admin for team ${i + 1} is ${myAdmin[i]}`)
    document.write("<div> <br></div>")
    document.write(`<div><b>Team Members:</b></div>`)
    document.write("<div><br></div>")
    for (j = 0; j < myEmpolyees.length;j++){
        if (myEmpolyees[j].startsWith("A") === true && myAdmin[i].startsWith("A") === true){
            document.write(`<div>`);
            document.write(`- ${++counterOne} ${myEmpolyees[j]}`);
            document.write(`</div>`);
        }
        if (myEmpolyees[j].startsWith("O") === true && myAdmin[i].startsWith("O") === true){
            document.write(`<div>`)
            document.write(`- ${++counterTwo} ${myEmpolyees[j]}`)
            document.write(`</div>`)
        }
        if (myEmpolyees[j].startsWith("S") === true && myAdmin[i].startsWith("S") === true){
            document.write(`<div>`)
            document.write(`- ${++counterThree} ${myEmpolyees[j]}`)
            document.write(`</div>`)
        }
}
}