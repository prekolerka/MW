const card = document.getElementById('tarotCard');
const btn = document.getElementById('pullBtn');
const cardFront = document.getElementById('cardFront');

const cards = [
    './assets/cards/card (1).png',
    './assets/cards/card (2).png',
    './assets/cards/card (3).png',
    './assets/cards/card (4).png',
    './assets/cards/card (5).png',
    './assets/cards/card (6).png',
    './assets/cards/card (7).png',
    './assets/cards/card (8).png',
    './assets/cards/card (9).png',
    './assets/cards/card (10).png',
    './assets/cards/card (11).png',
    './assets/cards/card (12).png',
    './assets/cards/card (13).png',
    './assets/cards/card (14).png',
    './assets/cards/card (15).png',
    './assets/cards/card (16).png',
    './assets/cards/card (17).png',
    './assets/cards/card (18).png',
    './assets/cards/card (19).png',
    './assets/cards/card (20).png',
    './assets/cards/card (21).png',
    './assets/cards/card (22).png',
    './assets/cards/card (23).png',
    './assets/cards/card (24).png',
    './assets/cards/card.png',
];

btn.addEventListener('click', () => {
    // если карта уже открыта — сначала закрываем
    if (card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');

        setTimeout(() => {
            showRandomCard();
        }, 800);
    } else {
        showRandomCard();
    }
});

function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);

    cardFront.src = cards[randomIndex];

    setTimeout(() => {
        card.classList.add('is-flipped');
    }, 100);
}