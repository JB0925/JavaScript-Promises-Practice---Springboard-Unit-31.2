// Loop through the keys I used, create a new element with the
// data I got back as the text, and append it to the DOM.

const appendToDiv = data => {
    const keys = [2,4,6,8,10];
    const root = document.querySelector('#root');
    keys.map(k => {
        let paragraph = document.createElement('p');
        paragraph.innerText = data[k];
        root.append(paragraph);
    })
}

// Get the data from the API

const getData = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://numbersapi.com/2,4,6,8,10/trivia?json';
        let result = axios.get(url);
        if (result) {
            resolve(result);
        } else {
            reject();
        };
    });
};

// A wrapper for both of the above functions

const placeInDom = () => {
    getData()
    .then(data => appendToDiv(data.data));
};

document.addEventListener('DOMContentLoaded', placeInDom);