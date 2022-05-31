//-------------ENLAZAMOS EL INPUT-------------------//
//----------------------------------------//
const selectedWordInput = () => {
    let word = inputPalabra.value.toUpperCase();
    selectedWord = word.split('');
}   
const starGameWithWord = ()=> {
    usedLetters = [];
    hits = 0;
    mistakes = 0;
    usedLettersElement.innerhtml = '';
    wordContainer.innerHTML = '';
    container1.style.display='none';
    containerJuego.style.display='flex'
    containerfinal.style.display='none'
    drawMan();
    iniciarJuego();
    selectedWordInput();
    drawWord();
    document.addEventListener('keydown', letterEvent);
    console.log(selectedWord);
}
    

function verificarpalabra(){
    if(inputPalabra.value == ''){//VERIFICAMOS QUE HAYA TEXTO
        alert('Debe  agregar, por lo menos, una palabra');
        return;
    }else{
        for(var i= 0; i<=acentos.length; i++){
            if(inputPalabra.value.includes(acentos[i])){
                alert('No está permitido añadir acentos ni caracteres especiales')
                inputPalabra.value='';
                inputPalabra.focus();
                return;
            }
        }  
    }
    
    starGameWithWord();
}
btn_Guardar.onclick = verificarpalabra;

