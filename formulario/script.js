(function(){
    //variables
var formulario = document.getElementsByName('formulario')[0],
    //boton = document.getElementById('btn');
    boton= document.getElementsByClassName('btn');
// validar nombre
    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Completa tu nombre");
            e.preventDefault();
        }
    };
//validar apellido
    var validarApellido = function(e){
        if(formulario.apellido.value == 0){
            alert("Completa tu apellido");
            e.preventDefault();
        }
    };
//validar mail
    var validarEmail = function(e){
        if(formulario.email.value == 0){
            alert("Ingresa un mail");
            e.preventDefault();
        }
    };
//validar opcion
/*
    var validarOpcion = function(e){
        if(formulario.opcion[0].checked == true ||
            formulario.opcion[1].checked == true ||
            formulario.opcion[2].checked == true){
            }else{
                alert("Debes elegir una opcion");
            e.preventDefault();
            }
    };*/
    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarEmail(e);
        validarOpcion(e);
    };
    //el formulario se envia
    formulario.addEventListener("submit", validar);
}())         
