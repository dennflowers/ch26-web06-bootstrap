console.log("Hola desde un script externo");


function changeColorToRed(){
    const refName = document.getElementById("name");
    refName.style.color = "red";
}


/*function getReferenceFullName(){
    return document.getElementById("fullName")
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}

function resetColors(){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        element.style.color = "purple";
    }
}
*/

