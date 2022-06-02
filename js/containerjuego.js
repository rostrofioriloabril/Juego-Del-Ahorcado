
var words= ['python','css','framework','bug','hosting','software','backend','frontend','fullstack','tester','java','php','ruby','javascript','sql','responsive','html','bootcamp']
//wordContainer

//btnIniciar

const usedLettersElement = document.getElementById('usedLetters');
let selectedWord;//selectpalabra
let usedLetters;//letrasUsadas
let mistakes;//errores
let hits;//aciertos


let partes ={
    
    0:aparecerCabeza,
    1:aparecerCuerpo,
    2:aparecerMochila,
    3:aparecerIzquierda,
    4:aparecerDerecha,
    5:aparecerEstomago,
    6:aparecerOjos,
    7:aparecerOjosBlancos
    
}
let wrongLetter = () => {
   
    aparecerCanvas()
    let miParte = partes[mistakes]
    miParte();
    mistakes++;
    if(mistakes === 8){

       return  endGame();
    } 
        
}
const winner = () => {
    document.removeEventListener('keyup keypress', letterEvent);
    containerJuego.style.display='none'
    container.style.display='none'
    containerpalabras.style.display='none'
    containerfinal.style.display='none'
    containerGane.style.display="block"
}
const endGame = () => {
    document.removeEventListener('keyup keypress', letterEvent);
    containerJuego.style.display='none'
    container.style.display='none'
    containerpalabras.style.display='none'
    containerfinal.style.display='block'
    respuestaCorrecta.textContent='¡Casi lo logras! La palabra correcta era: '+ selectedWord;
}
const correctLetter = letter => {
    const { children } =  wordContainer;
    for(let i = 0; i < children.length; i++) { //iteramos sobre los hijos del contenedor mientras que i sea menor a el array
        if(children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden'); 
            hits++;
        }
    }
    if(hits === selectedWord.length) winner();
}
const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
}
const letterInput = letter => {
    if(selectedWord.includes(letter)) {
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
};

const letterEvent = event => {
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)){ //si laletra esta entre la a y la z y si fue usada la letra
        letterInput(newLetter);  
    };
        
        
};
const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        //contenido sea la letra en mayuscula
        letterElement.classList.add('letter');
        //añadimos 2 clases
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    });
};

const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();//pasamos todo a mayuscula, hacemos que el array nos de un numero random de 0 al numero de arreglos
    selectedWord = word.split('');///seleccionamos la palabra
};
const drawMan = () => {
    aparecerCanvas();
}
const starGame = ()=> {
    desaparecerPartes();
    desaparecerLetras();
    usedLetters = [];
    hits = 0;
    mistakes = 0;
    usedLettersElement.innerhtml = '';
    wordContainer.innerHTML = '';
    container1.style.display='none';
    containerJuego.style.display='flex'
    containerfinal.style.display='none'
    drawMan();
    iniciarJuego()
    selectRandomWord();
    drawWord();
    document.addEventListener('keyup keypress', letterEvent);
    console.log(selectedWord);
}

btnIniciar.addEventListener('click', starGame);
btnNuevo.addEventListener('click',starGame);
btnVolverAJugar.addEventListener('click',starGame);






















//----------------------------------------//

function reset (){
    usedLetters = [];
    hits = 0;
    mistakes = 0;
    usedLettersElement.innerhtml = '';
    wordContainer.innerHTML = '';
}
function cancelar(){
    containerJuego.style.display='none'
    containerpalabras.style.display='none';
    containerfinal.style.display='none';
    containerGane.style.display='none';
    container1.style.display='block'
    bloqueText.style.width='100%'
    reset();
}
//usamos la misma funcion que arriba para todos los botones de cancelar
btn_Cancelar.onclick = cancelar;
btnCancelar2.onclick = cancelar;
btnCancelar3.onclick = cancelar;
volverAlInicio.onclick = cancelar;
btnDesistir.onclick = endGame;
