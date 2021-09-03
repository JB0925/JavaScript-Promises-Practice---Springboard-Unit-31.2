let cardArray = [];

const formatData = data => {
    const deckId = data.deck_id;
    let card = data.cards[0];
    const str = `${card.value} of ${card.suit}`
    cardArray.push(str);
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
}

const getData = () => {
    const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1'
    axios.get(url)
    .then(data => formatData(data.data))
    .then(data => formatData(data.data))
    .then(() => cardArray.forEach(c => console.log(c)))
    .catch(e => console.log(e))
};


document.addEventListener('DOMContentLoaded', getData);