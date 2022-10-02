//-----------------------DELETE CONTENT FUNCTION--------------------------//
function delete_content() {
    const list = document.getElementById("tech-use-images");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    } 
}


//--------------------------ARRAYS-----------------------------//

//LANGUAGES ARRAY
let languages_array = [];

languages_array[0] = "img/languages/html.png";
languages_array[1] = "img/languages/css.png";
languages_array[2] = "img/languages/javascript.png";
languages_array[3] = "img/languages/mysql.png";
languages_array[4] = "img/languages/oracle.png";

//TOOLS ARRAY
let tools_array = [];

tools_array[0] = "img/tools/git.png";
tools_array[1] = "img/tools/github.png";
tools_array[2] = "img/tools/linux.png";
tools_array[3] = "img/tools/windows.png";


//-----------------------------PRINT LANGUAGES----------------------------//
document.getElementById("languages").addEventListener("click", function languages_print() {
    
    let contenedor_principal=document.getElementById("tech-use-images");

    delete_content();

    for (i=0; i<languages_array.length; i++) {

        let img_create=document.createElement("img");
        img_create.src=languages_array[i];
        contenedor_principal.appendChild(img_create);
    }
});

//-----------------------------------PRINT TOOLS---------------------------//
document.getElementById("tools").addEventListener("click", function tools_print() {
    let contenedor_principal=document.getElementById("tech-use-images");

    delete_content();

    for (i=0; i<tools_array.length; i++) {
        let img_create=document.createElement("img");
        img_create.src=tools_array[i];
        contenedor_principal.appendChild(img_create);
    }
});