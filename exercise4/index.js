// Global variables

let deck_id;
let count = 0;
const btn = document.querySelector('button');
const root = document.querySelector('#root');
const new_deck_url = `http://deckofcardsapi.com/api/deck/new/draw/?count=0`;
 
//method used to get the deck id so that we aren't calling
//for a new deck each time the button is clicked.
const getDeckId = () => {
    return new Promise((resolve, reject) => {
        let res = axios.get(new_deck_url)
        resolve(res)
    })
}

// Initial call to get data from the API.
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

// A styling method used to randomly rotate the cards, 
// as if they were being placed on a table haphazardly.
const setRotationOnCard = card => {
    let randomNum = Math.floor(Math.random() * 15);
    if (count % 2 === 0) {
        card.style.rotate = `${randomNum}deg`
    } else {
        card.style.rotate = `-${randomNum}deg`
    }
    count++
}


// Creating the card, setting a rotation on it, and adding 
// it to the DOM.
const displayCard = (card) => {
    if (!card.remaining) return;
    const img = document.createElement('img');
    img.src = card.cards[0].image;
    setRotationOnCard(img)
    root.append(img);
};


// Wrapper used to pass to the button event listener
const handleClick = () => {
    getData(deck_id)
    .then(data => displayCard(data.data));
};


// Set the deck_id and then set the event listener.
getDeckId()
.then(data => {
    deck_id = data.data.deck_id;
});

btn.addEventListener('click', handleClick);