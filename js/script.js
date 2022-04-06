const backCards = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif",
"tripletsparrot.gif", "unicornparrot.gif"];
let firstCard;
let secondCard;
let qtdPlays = 0;
let canFlip = true;


function comparador() { 
	return Math.random() - 0.5;
}

function askNumberCards() {
    const qtdCards = Number(prompt("Digite uma quantidade par de cartas entre 4 e 14 para iniciar o jogo"));
    
    if(qtdCards % 2 === 0 && 4 <= qtdCards <= 14) {
        setNumberCards(qtdCards);
    } else {
        alert("Número inválido");
        askNumberCards();
    }
}

function setNumberCards(qtd) {
    let backFaces = backCards.sort(comparador).slice(0,(qtd / 2));
    backFaces = (backFaces.concat(backFaces)).sort(comparador);

    for(let i = 0; i < qtd; i += 2) {
        document.querySelector(".cards").innerHTML += `
        <div class="pair-cards">
            <div class="card" onclick="flipCard(this)">
                <div class="face back-face">
                    <img src="images/${backFaces[i]}">
                </div>
                <div class="face">
                    <img src="images/front.png">
                </div>
            </div>
            <div class="card" onclick="flipCard(this)">
                <div class="face back-face">
                    <img src="images/${backFaces[i + 1]}">
                </div>
                <div class="face">
                    <img src="images/front.png">
                </div>
            </div>
        </div>`;
    }
}

function flipCard(element) {
    if(canFlip) {
        element.querySelector(".face:first-child").classList.add("back-flip");
        element.querySelector(".face:last-child").classList.add("front-flip");
        
        if(firstCard === undefined) {
            firstCard = element;
            
        } else {
            secondCard = element;
            verifyPair();
            
        }
    
        qtdPlays++;

    }
}

function verifyPair() {
    const firstBackFace = firstCard.querySelector(".back-face > img").getAttribute("src");
    const secondBackFace = secondCard.querySelector(".back-face > img").getAttribute("src");

    if(firstBackFace === secondBackFace) {
        firstCard.removeAttribute("onclick");
        secondCard.removeAttribute("onclick");
        
        firstCard = undefined;
        secondCard = undefined;

        verifyEndGame();

    } else {
        canFlip = false;

        timeOut = setTimeout(function() {
            firstCard.querySelector(".face:first-child").classList.remove("back-flip");
            firstCard.querySelector(".face:last-child").classList.remove("front-flip");
    
            secondCard.querySelector(".face:first-child").classList.remove("back-flip");
            secondCard.querySelector(".face:last-child").classList.remove("front-flip");
            
            firstCard = undefined;
            secondCard = undefined;

            canFlip = true;
        }, 1000);
    }

}

function verifyEndGame() {
    const qtdCards = document.querySelectorAll(".card").length;
    const qtdDoneCards = document.querySelectorAll(".front-flip").length;

    if(qtdCards === qtdDoneCards) {
        setTimeout(function() {
            alert(`Você venceu em ${qtdPlays} jogadas`);
        }, 500);

    }
}

askNumberCards();