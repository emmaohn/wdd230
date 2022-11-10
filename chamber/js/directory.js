
let cardselector = document.querySelector('#cardselect');
let listselector = document.querySelector('#listselect');
let cardview = document.querySelector('#cardview');
let listview = document.querySelector('#listview');

cardselector.addEventListener('click', () => {
    cardview.style.display = 'grid';
    listview.style.display = 'none';
})

const requestURL = 'https://emmaohn.github.io/wdd230/chamber/data/data.json';

fetch(requestURL)
    // promise object
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const bizlist = jsonObject['businesses'];
        bizlist.forEach(displayCards);
        // bizlist.forEach(displayList);
    });

function displayCards(card) {
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement('div');
    cardelt.innerHTML = 
        `<img src="${card.img}" alt="logoimage">
        <p>${card.address}</p>
        <p>${card.phone}</p>
        <p><a href="${card.website}">${card.website}</a></p>`;
    cardview.appendChild(cardelt);
}

// function displayList() {
    
// }
