function vereficaSeOChutePossuiUmValorValido(){
    const numero = +chute

    if(chuteForInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = 
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundImage = 'linear-gradient(45deg, rgb(215, 216, 218), rgb(45, 26, 46))'
            
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    vereficaResposta(numero, numeroSecreto)
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

function vereficaResposta(chute, numeroSecreto){
    chute = parseInt(chute)
    numeroSecreto = parseInt(numeroSecreto)

    if (chute === numeroSecreto){
        document.body.innerHTML = `
        <h2>Voce acertou</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    if(numeroSecreto > chute){
        elementoChute.innerHTML += `<div>o numero é maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }
    if(numeroSecreto < chute){
        elementoChute.innerHTML += `<div>o numero é menor <i class="fa-solid fa-arrow-down"></i> </div>`
    }

}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})