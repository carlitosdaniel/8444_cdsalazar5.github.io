function correoElectro() {
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var valor = document.getElementById("email");
    if (!expresion.exec(valor.value)) {
        alert("El correo electronico es incorrecto");
        document.getElementById("email").value = "";
    }
}

function validarTelefono() {
    var expresion = /^[09][0-9]{1,9}$/;
    var valor = document.getElementById("telefono");
    if (!expresion.exec(valor.value)) {
        alert("Se recibe solo numeros y 10 ditios");
        document.getElementById("telefono").value = "";

    }
}


/*function deshaBoton() {
    const myButton = document.getElementById('boton');
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = "Enviando datos ..........";
 
    //simulación de espera para ejecución de un proceso
    setTimeout(function() {
        //console.log('Espera por favor...');
        myButton.textContent = "Enviar";
        myButton.style.opacity = 1;
        myButton.disabled = false;
    }, 5000);
}*/

/*const btn = document.getElementById('boton');
btn.addEventListener("click",tiempo)

function tiempo()
{
    const myButton = document.getElementById('boton');
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = "Enviando datos ..........";

    setTimeout(function() {
        //console.log('Espera por favor...');
        myButton.textContent = "Enviar";
        myButton.style.opacity = 1;
        myButton.disabled = false;
    }, 5000);
 
}*/

function boton() {

    const myButton = document.getElementById('boton');
    myButton.disabled = true;
    myButton.style.opacity = 0.7;
    myButton.textContent = "Enviando datos ..........";

    setTimeout(function () {
        //console.log('Espera por favor...');
        myButton.textContent = "Enviado";
        myButton.style.opacity = 1;
        myButton.disabled = false;
    }, 2000);
}