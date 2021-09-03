let cardArray = [];

const formatData = data => {
    const deckId = data.deck_id;
    let card = data.cards[0];
    const cardString = `${card.value} of ${card.suit}`;
    cardArray.push(cardString);
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
}

const getData = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';
        let res = axios.get(url);
        if (res) {
            resolve(res);
        } else {
            reject()
        };
    });
};

const makePromises = () => {
    getData()
    .then(data => formatData(data.data))
    .then(data => formatData(data.data))
    .then(() => cardArray.forEach(c => console.log(c)))
    .catch(e => console.log(e));
};


document.addEventListener('DOMContentLoaded', makePromises);