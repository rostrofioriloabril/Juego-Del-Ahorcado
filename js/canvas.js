var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

///////////////////PIERNA DERECHA////////////////
function aparecerDerecha(){
    /////////////CUADRADO NEGRO//////////////
    pincel.beginPath();
    pincel.fillStyle='#000';
    pincel.moveTo(20,60);
    pincel.fillRect(53,81,20,11);
    pincel.fill();
    ///////////////////REDONDEADO NEGRO/////////
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.moveTo(70,90)
    pincel.arc(63,90,10,0,2.99);
    pincel.fill();
    
//////////////////REDONDEADO VIOLETA/////////////////
  pincel.beginPath();
    pincel.fillStyle='#7b0237'
    pincel.moveTo(70,90)
    pincel.arc(63,90,8,0,2.99);
    pincel.fill();

/////////////CUADRADO VIOLETA//////////////
    pincel.beginPath();
    pincel.fillStyle='#7b0237'
    pincel.moveTo(20,60);
    pincel.fillRect(55,81,16,10);
    pincel.fill();

}

//////////////////PIERNA IZQUIERDA/////////
function aparecerIzquierda(){
    //////////CUADRADO NEGRO///////////////
    pincel.beginPath();
    pincel.fillStyle= '#000';
    pincel.moveTo(20,60);
    pincel.fillRect(27,81,18,11);
    pincel.fill();
    /////////////////////
    /////////////REDONDEADO NEGRO/////////////////
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.moveTo(35,90)
    pincel.arc(36,91,9.3,0,2*Math.PI);
    pincel.fill();

  //////////REDONDEADO ROJO///////////
    pincel.beginPath();
    pincel.fillStyle='#7b0237';
    pincel.moveTo(35,90)
    pincel.arc(36,91,7,0,2.99);
    pincel.fill();
    /////////CUADRADO ROJO////////
     pincel.beginPath();
     pincel.fillStyle= '#7b0237';
     pincel.moveTo(20,60);
     pincel.fillRect(29,81,14,11);
     pincel.fill();
     /////////////////////

}

////////////////////////ESTOMAGO//////////////////
function aparecerEstomago(){
    ////////////////////ESTOMAGO////////////
    /////////////CUADRADO NEGRO///////////
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.fillRect(27,60,46,21);
    pincel.fill();
    /////////RECTANGULO ROJO///////////////
    pincel.beginPath();
    pincel.fillStyle='#7b0237';
    pincel.moveTo(29,18)
    pincel.fillRect(29,60,42,21);
    pincel.fill();

    /////////LINEA CULMINACION DEL ESTOMAGO////
    pincel.beginPath();
    pincel.strokeStyle='#000';
    pincel.moveTo(43,82);
    pincel.lineTo(60,82);
    pincel.stroke();
    pincel.moveTo(43,82);
    pincel.lineTo(59,82);
    pincel.stroke();
    /////PARTE BAJA DE LA CULMINACION///
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.moveTo(61.5,80.7)
    pincel.lineTo(55,82)
    pincel.lineTo(55,86)
    pincel.fill()
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.moveTo(61.5,80.7)
    pincel.lineTo(55,82)
    pincel.lineTo(55,86)
    pincel.fill()
    /////////////////////////////
    pincel.beginPath();
    pincel.moveTo(50,62)
    pincel.fillStyle='#c60a00'
    pincel.arc(51,59,19,6.4,3.1);
    pincel.fill()

    /////////REDONDO ROJO//////////
    pincel.beginPath();
    pincel.fillStyle='#c60a00'
    pincel.fillRect(36.2,60,33.1,4)
    pincel.fill()
    ////////////////////////////////
    pincel.beginPath()
    pincel.moveTo(71,60)
    pincel.fillStyle='#c60a00'
    pincel.lineTo(66,70)
    pincel.lineTo(50,60)
    pincel.fill()

}

///////////////Mochila//////////
function aparecerMochila() {
    pincel.beginPath();
    pincel.fillStyle= '#000';
    pincel.fillRect(11,50,18,23);
    pincel.fill();
    ////////CIRCULO NEGRO ARRIBA/////////
    pincel.beginPath();
    pincel.moveTo(15,40)
    pincel.arc(20,48,9,0,11);
    pincel.fill();
    ////////CIRCULO NEGRO ABAJO///////////
    pincel.moveTo(15,40)
    pincel.arc(20,74,9,0,11);
    pincel.fill();
    /////////CUADRADOS NEGROS PARA LAS PUNTAS////////
    pincel.beginPath();
    pincel.fillStyle= '#000';
    pincel.fillRect(19,39,10,10);
    pincel.fill();
    //////////////
    pincel.beginPath();
    pincel.fillStyle= '#000';
    pincel.fillRect(19,73,10,10);
    pincel.fill();

   ////////////RECTANGULO ROJO//////////////
    pincel.beginPath();
     pincel.fillStyle= '#c60a00';
     pincel.moveTo(20,24);
     pincel.fillRect(13,52,14,21);
     pincel.fill();

    //////////////////CUADRADOS ROJOS PARA LAS PUNTAS/////
    pincel.beginPath();
    pincel.fillStyle= '#c60a00';
    pincel.fillRect(18,41,9,10);
    pincel.fill()
    ////////CUADRADO VIOLETA ABAJO//
    pincel.beginPath();
    pincel.fillStyle= '#7b0237';
    pincel.fillRect(18,71,9,10);
    pincel.fill();
   ////////////CIRCULO ROJO ARRIBA///////    
     pincel.moveTo(27,40);
     pincel.fillStyle= '#c60a00';
     pincel.arc(20,48,7,0,11);
     pincel.fill();
      //////////CIRCULO VIOLETA ARRIBA///
      pincel.beginPath();
      pincel.moveTo(20,60);
      pincel.fillStyle= '#7b0237';
      pincel.arc(20,54,7.3,0,9);
      pincel.fill();
    /////////////CIRCULO ROJO ABAJO//////////
     pincel.beginPath();
     pincel.moveTo(29,60);
     pincel.fillStyle= '#7b0237';
     pincel.arc(20,74,7,0,11);
     pincel.fill();
     //RECTANGULO VIOLETA/////
     pincel.beginPath();
     pincel.fillStyle= '#7b0237';
     pincel.moveTo(20,24);
     pincel.fillRect(13,51,14,22);
     pincel.fill();
     
}

/////////CABEZA//////////////////
function aparecerCabeza(){

    ////////////CIRCULO NEGROS//////////////
    ////////////DERECHO/////////
    
    ////////////IZQUIERDO///////////
    pincel.beginPath();
    pincel.fillStyle='#000';
    pincel.moveTo(50,30);
    pincel.arc(49.8,35,23.1,3.1,6.3);
    pincel.moveTo(29,18);
    pincel.fill();

   

/////////////CIRCULO ROJO/////////////////
   pincel.beginPath();
    pincel.fillStyle='#c60a00';
    pincel.moveTo(50,35);
    pincel.arc(49.8,35,21.2,3.1,6.3);
    pincel.fill();
 

///////////////LINEA VIOLETA CABEZA////
    pincel.beginPath()
    pincel.fillStyle='#7b0237'
    pincel.moveTo(32,22)
    pincel.lineTo(32,36)
    pincel.lineTo(27.5,37)
    pincel.fill()
}

/////////////////////////CUERPO////////////
function aparecerCuerpo(){
    /////////////CUADRADO NEGRO///////////
    pincel.beginPath();
    pincel.fillStyle='#000'
    pincel.fillRect(27,32,46,30);
    pincel.fill();

    /////////RECTANGULO ROJO///////////////
    pincel.fillStyle='#c60a00'
    pincel.moveTo(29,18)
    pincel.fillRect(29,32,42,30);
    pincel.fill();
    ///////RECT VIOLETA///////
    pincel.beginPath();
    pincel.fillStyle='#7b0237'
    pincel.fillRect(29,32,3,30)
    pincel.fill()
    //////////LINEAS Y CIRCULOS//////
    pincel.beginPath();
    pincel.fillStyle='#7b0237'
    pincel.moveTo(30,33)
    pincel.lineTo(29,62)
    pincel.lineTo(37,62)
    pincel.fill()
    pincel.beginPath();
    pincel.fillStyle='#c60a00'
    pincel.moveTo(40,50)
    pincel.fillRect(32,42,5,20)
}

//////////////OJO/////////////
function aparecerOjos(){
    //////////CIRCULOS DEL OJO NEGRO//////////
      pincel.beginPath();
      pincel.fillStyle='#000';
      pincel.moveTo(50,42)
      pincel.arc(71,42,12,10,8);
      pincel.moveTo(70,42)
      pincel.arc(54,42,12,8,11);
      pincel.fill();
      //////////CUADRADOS DEL OJO NEGRO//////////
      pincel.beginPath();
      pincel.fillStyle= '#000';
      pincel.moveTo(50,52);
      pincel.fillRect(53,30,19,24);
      pincel.fill();

}

////////////// OJO BLANCO/////////////
function aparecerOjosBlancos(){
    //////////CUADRADO DEL OJO//////////
    pincel.beginPath();
    pincel.fillStyle= '#fff';
    pincel.moveTo(50,52);
    pincel.fillRect(53,32,18,20);
    pincel.fill();
   /////////////CIRCULOS DEL OJO BLANCO///////
    pincel.beginPath();
    pincel.fillStyle='#fff';
    pincel.moveTo(50,42)
    pincel.arc(71,42,10.2,10,8);
    pincel.moveTo(70,42)
    pincel.arc(54,42,10.2,8,14);
    pincel.fill();
}
