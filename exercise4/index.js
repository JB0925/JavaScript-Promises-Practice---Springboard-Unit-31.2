let deck_id;
let count = 0;
const btn = document.querySelector('button');
const root = document.querySelector('#root');
const new_deck_url = `http://deckofcardsapi.com/api/deck/new/draw/?count=0`;
 

const getDeckId = () => {
    return new Promise((resolve, reject) => {
        let res = axios.get(new_deck_url)
        resolve(res)
    })
}

const getData = (id) => {
    return new Promise((resolve, reject) => {
        const url = `http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`;
        let res = axios.get(url);
        if (res) {
            resolve(res);
        } else {
            reject()
        };
    });
};

const setRotationOnCard = card => {
    let randomNum = Math.floor(Math.random() * 15);
    if (count % 2 === 0) {
        card.style.rotate = `${randomNum}deg`
    } else {
        card.style.rotate = `-${randomNum}deg`
    }
    count++
}

const displayCard = (card) => {
    if (!card.remaining) return;
    const img = document.createElement('img');
    img.src = card.cards[0].image;
    setRotationOnCard(img)
    root.append(img);
};

const handleClick = () => {
    getData(deck_id)
    .then(data => displayCard(data.data));
};


getDeckId()
.then(data => {
    deck_id = data.data.deck_id;
});

btn.addEventListener('click', handleClick);