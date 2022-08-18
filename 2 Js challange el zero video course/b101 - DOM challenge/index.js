// Start creating header
let header = document.createElement("header");
let hOne = document.createElement("h1");
let ul = document.createElement("ul");
let list = ["Home", "ABout", "Services", "Contact"]; 

for (i = 0; i < list.length; i++){
    var li = document.createElement("li");
    li.textContent = list[i]
    ul.append(li);
    li.style.cssText = "padding :  10px"
}

document.body.append(header);
header.append(hOne);
hOne.textContent = "Elzero"
header.append(ul);

// Styling header
header.style.cssText = "display : flex; justify-content : space-between; align-items : center;"
ul.style.cssText = "list-style : none; display : flex;"
hOne.style.cssText = "color : green; padding : 10px"

// StarT creating the content

let container = document.createElement("div");
container.className = "container";
document.body.prepend(container);
for (i = 0 ; i < 15; i++){
    var divProduct = document.createElement("div");
    var span1 = document.createElement("span")
    var spantxt1 = document.createTextNode(i + 1);
    span1.append(spantxt1);
    span1.style.cssText = "font-weight : bold; font-size : 30px"
    var span2 = document.createElement("span");
    var spantxt2 = document.createTextNode("product");
    span2.append(spantxt2);
    divProduct.append(span1,span2);
    container.append(divProduct)
    divProduct.style.cssText = " width : calc((100% - 60px) / 3 );background-color : #FFFFFF ; display: flex; flex-direction : column ; align-items : center;padding : 20px 0  ";
    divProduct.className = "product";
}
container.style.cssText = "background-color : #ECECEC ;display : flex; flex-wrap : wrap ; padding : 20px ; gap : 20px;"

// Start creating footer

let footer = document.createElement("footer");
footer.textContent = "copyright 2021";
footer.className = "footer"
footer.style.cssText = "background-color : #23A96E; color : white; text-align : center; padding : 10px 0;"
container.after(footer);







