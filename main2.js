//----------------------------------------//
/////////////  CONTAINER 1 ///////////////
var container1 = document.getElementById('container');
var btnIniciar = document.getElementById('btn1');
var btnAgregar= document.getElementById('btn2');
///////////////////////////////////////////
////////////     FUNCIONES   /////////////
function mostrarAgregarPalabra(){
    container1.style.display='none';
    containerpalabras.style.display='block';
    inputPalabra.focus();
}
function iniciarJuego(){ //se usa en main3
    agrupacanva.style.display='none'
    container1.style.display='none';
    containerpalabras.style.display='none'
    containerJuego.style.display='flex'
    bloqueText.style.width='100%'
}

btnAgregar.onclick = mostrarAgregarPalabra;


//----------------------------------------//
/////////////  CONTAINER 2 ///////////////
var containerpalabras = document.getElementById('container2');
var btn_Guardar = document.getElementById('btnguardar');
var btn_Cancelar= document.getElementById('btncancelar');
var inputPalabra = document.getElementById('inputguarda');

//const x = inputPalabra;
///////////////////////////////////////////
////////////     FUNCIONES   /////////////
function cancelar(){
    containerJuego.style.display='none'
    containerpalabras.style.display='none';
    containerfinal.style.display='none';
    containerGane.style.display='none';
    container1.style.display='block'
    bloqueText.style.width='100%'
    reset();
}

var acentos=[
    'á','é','í','ó','ú','à','è','ì','ò','ù','!','"','#','$','%','()','*', '+', '-','.','/', '0', '1', '2','3', '4', '5', '6', '7', '8', '9', ':',';','=','?','¿','@','[','^','|','}','{', ' ~',']', '´'
];




//----------------------------------------//
////////  CONTAINER 3 (CANVAS) ///////////
var containerJuego = document.getElementById('containercanvas');
var bloqueText = document.getElementById('bloque');
var agrupacanva = document.getElementById('canva');
var wordContainer = document.getElementById('containerword');//van los span 
var btnDesistir = document.getElementById('desistir');
var btnNuevo= document.getElementById('nuevo');
var btnCancelar2 = document.getElementById('cancelar2');
///////////////////////////////////////////
////////////     FUNCIONES   /////////////


function aparecerCanvas(){//la funcion se usa en main3
    agrupacanva.style.display='flex'
    bloqueText.style.width='60%'
    wordContainer.style.width='100%'
}


//----------------------------------------//
//////////  CONTAINER 4 (FIN)   ////////
var containerfinal = document.getElementById('containerfin');
var btnCancelar3 = document.getElementById('btncancelarfin');
var btnVolverAJugar = document.getElementById('btnvolver');
var respuestaCorrecta = document.getElementById("respuestac")
///////////////////////////////////////////
////////////     FUNCIONES   /////////////


//----------------------------------------//
///////////// CONTAINER 5 (GANE)  /////////
var containerGane = document.getElementById('containergane');
var volverAlInicio = document.getElementById('btnvolverap');
///////////////////////////////////////////
////////////     FUNCIONES   /////////////


