const cards = document.querySelectorAll(".card");

function askNumberCards() {
    const qtdCards = prompt("Digite uma quantidade par de cartas entre 4 e 14 para iniciar o jogo");
    
    if(qtdCards % 2 === 0 && 4 <= qtdCards <= 14) {
        //TODO: insere a quantidade de cartas
        setNumberCards(qtdCards);
    } else {
        alert("Número inválido");
        askNumberCards();
    }
}

function setNumberCards(qtd) {
    const numberCards = cards.length;
    console.log(document.querySelector(".cards"));
    if(qtd !== numberCards) {
        for(let i = 0; i < (qtd - numberCards) / 2; i++) {
            document.querySelector(".cards").innerHTML += `
            <div class="pair-cards">
                <div class="card">
                    <img src="images/front.png">
                </div>
                <div class="card">
                    <img src="images/front.png">
                </div>
            </div>`;
        }
    }
    console.log(document.querySelectorAll(".card").length)
}

askNumberCards();