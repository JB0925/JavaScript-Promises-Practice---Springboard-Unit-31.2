let infoArray = [];

const pushToArray = (data,url) => {
    infoArray.push(data.text);
    return axios.get(url);
}

const putInfoInDom = () => {
    const root = document.querySelector('#root');
    infoArray.map(a => {
        let paragraph = document.createElement('p');
        paragraph.innerText = a
        root.append(paragraph);
    })
}

const getData = () => {
    const url = 'http://numbersapi.com/10/trivia?json';
    axios.get(url)
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(() => putInfoInDom())
    .catch(e => console.log(e));
};

document.addEventListener('DOMContentLoaded', getData);