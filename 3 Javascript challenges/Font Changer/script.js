let fontList = document.getElementById("font");
let Header = document.getElementById("h");

fontFromSG()
function changeFont(){
    Header.style.fontFamily = fontList.value ;
    sessionStorage.setItem("font", fontList.value);
}
function fontFromSG(){
    Header.style.fontFamily = sessionStorage.getItem("font");
    for (i = 0; i < fontList.options.length;i++){
        console.log(fontList.selectedOptions )
        if (fontList.options[i].value === sessionStorage.getItem("font")){
            let sel = document.createAttribute("selected");
            fontList.options[i].setAttributeNode(sel)
        }
    }
}

fontList.onchange = changeFont;