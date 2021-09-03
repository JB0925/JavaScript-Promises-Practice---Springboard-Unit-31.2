const appendToDiv = data => {
    const keys = [2,4,6,8,10];
    const root = document.querySelector('#root');
    keys.map(k => {
        let paragraph = document.createElement('p');
        paragraph.innerText = data[k];
        root.append(paragraph);
    })
}

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

const placeInDom = () => {
    getData()
    .then(data => appendToDiv(data.data));
};

document.addEventListener('DOMContentLoaded', placeInDom);