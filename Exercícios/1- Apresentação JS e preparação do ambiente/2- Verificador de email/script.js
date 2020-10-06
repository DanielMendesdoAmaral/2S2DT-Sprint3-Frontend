let inputEmail = document.querySelector("#inputEmail");
let btnEnviar = document.querySelector("#btnEnviar");

inputEmail.onkeyup = function() {
    if(inputEmail.value.includes("@"))
        btnEnviar.disabled = false;
    else 
        btnEnviar.disabled = true;
}