let container = document.querySelector(".container");
let inputField = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let taskDiv = document.querySelector(".tasks");


let array = new Array();
addFromLS()
addBtn.addEventListener("click",function(){
    if (inputField.value.length > 0){
        addTasks();
    }
})

function addTasks(){
    array.push(inputField.value)
    let lineDiv = document.createElement("div")
    lineDiv.className= "linediv"
    let span = document.createElement("span")
    let deleteBtn = document.createElement("button")
    span.append(inputField.value)
    deleteBtn.append("delete")
    deleteBtn.className = "delete"
    lineDiv.append(span, deleteBtn);
    taskDiv.append(lineDiv)
    inputField.value ="";
    window.localStorage.setItem("task",JSON.stringify(array));
    deleteTask(deleteBtn,array);
}
function deleteTask(deleteBtn, array){
    deleteBtn.addEventListener("click",function(){
        console.log(window.localStorage.getItem("task"))
        let x = array.indexOf(deleteBtn.parentElement.firstChild.innerHTML);
        array.splice(x,1)
        deleteBtn.parentElement.remove();
        localStorage.setItem("task", JSON.stringify(array));
    })

}
function addFromLS(){
    if (localStorage.getItem("task")){
        let array = JSON.parse(window.localStorage.getItem("task"));
    array.forEach(ele => {
        let lineDiv = document.createElement("div")
    lineDiv.className= "linediv"
    let span = document.createElement("span")
    let deleteBtn = document.createElement("button")
    span.append(ele)
    deleteBtn.append("delete")
    deleteBtn.className = "delete"
    lineDiv.append(span, deleteBtn);
    taskDiv.append(lineDiv)
    deleteTask(deleteBtn, array);
    });
    }
}
























































































// const text = document.querySelector(".input");
// const add = document.querySelector(".add");
// const tasks = document.querySelector(".tasks");
// const clear = document.querySelector("#clear");
// let array = new Array();

// getElementLSToBody();

// add.addEventListener("click", () => {
//   let taskText = text.value;
//   array.push(taskText);
//   localStorage.setItem("task", JSON.stringify(array));
//   // Create And Append Elements
//   let div = document.createElement("div");
//   div.classList.add("task");
//   let p = document.createElement("p");
//   let btn = document.createElement("button");
//   btn.append("delete");
//   p.append(taskText);
//   div.append(p, btn);
//   tasks.append(div);
//   text.value = "";
//   deletItemFromLS(array, btn);
// });

// function deletItemFromLS(array, btn) {
//   btn.addEventListener("click", () => {
//     array = JSON.parse(localStorage.getItem("task"));
//     console.log(array)
//     console.log(btn.parentElement.children[0].textContent)
//     let index = array.indexOf(btn.parentElementè.children[0].textContent);
//     array.splice(index, 1);
//     btn.parentElement.style.cssText = "pointer-events: none";
//     btn.parentElement.remove();
//     localStorage.setItem("task", JSON.stringify(array));
//   });
// }

// function getElementLSToBody() {
//   if (localStorage.getItem("task")) {
//     array = JSON.parse(localStorage.getItem("task"));
//     array.forEach((e) => {
//       // Create And Append Elements
//       let div = document.createElement("div");
//       div.classList.add("task");
//       div.addEventListener("click", () => {
//         div.classList.toggle("task-check");
//       });
//       let p = document.createElement("p");
//       let btn = document.createElement("button");
//       btn.append("delete");
//       p.append(e);
//       div.append(p, btn);
//       tasks.append(div);
//       text.value = "";
//       deletItemFromLS(array, btn);
//     });
//   } else {
//     array = [];
//   }
// }

// function clearAllData() {
//   clear.addEventListener("click", () => {
//     localStorage.clear();
//     tasks.innerHTML = "";
//   });
// }
// clearAllData();

