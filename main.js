function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('elemento não encontrado ou seletor inválido');
    }
}


//document (para acessar todo o html) querrySelector(para procurar algum elemento dentro do document(html))//
//o ""." é usado para acessar os dados possiveis no elemento//


const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length;contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    //colocando o efeito ao usar o teclado de mudar o fundo para vermelho   
    //evento para selecionar a forma de chamar as teclas do teclado
    tecla.onkeydown = function(evento){
        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
    //console.log(contador);
}
