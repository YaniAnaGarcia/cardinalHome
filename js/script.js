(function(){
        //variables
    var formulario = document.getElementsByName('formulario')[0],
        boton = document.getElementById('btn');
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
        var validarOpcion = function(e){
            if(formulario.opcion.value == 0){
                alert("Debes elegir una opcion");
                e.preventDefault();
            }
        };
        var validar = function(e){
            validarNombre(e);
            validarApellido(e);
            validarEmail(e);
            validarOpcion(e);
        };
        formulario.addEventListener("submit", validar); 
    }() )         
