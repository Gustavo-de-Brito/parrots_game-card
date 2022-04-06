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

    if(qtd !== numberCards) {
        for(let i = 0; i < (qtd - numberCards) / 2; i++) {
            document.querySelector(".cards").innerHTML += `
            <div class="pair-cards">
                <div class="card" onclick="flipCard(this)">
                    <div class="face back-face">
                        <img src="images/unicornparrot.gif">
                    </div>
                    <div class="face">
                        <img src="images/front.png">
                    </div>
                </div>
                <div class="card" onclick="flipCard(this)">
                    <div class="face back-face">
                        <img src="images/unicornparrot.gif">
                    </div>
                    <div class="face">
                        <img src="images/front.png">
                    </div>
                </div>
            </div>`;
        }
    }
}

function flipCard(element) {
    element.querySelector(".face:first-child").classList.toggle("back-flip");
    element.querySelector(".face:last-child").classList.toggle("front-flip");
}

function test() {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
}

askNumberCards();