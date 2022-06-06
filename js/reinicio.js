
function desaparecerLetras(usedLetters){
    usedLettersElement.innerHTML= '';
    wordContainer.innerHTML = '';
    inputParaResponsive.value='';
    return usedLetters= '';
    
};

function desaparecerPartes(){
 
    let contador = Object.keys(partes);
    for(let i= 0; i < contador.length; i++){
       // let remover = contador[i];
       // partes[remover];
       pincel.clearRect(0,0,pantalla.width,pantalla.height);
    }
}
