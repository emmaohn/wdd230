let cardview = document.querySelector('#cardview');

const requestURL = 'https://emmaohn.github.io/wdd230/jojostradingco/data/blogs.json';

fetch(requestURL)
    // promise object
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const bloglist = jsonObject['blogs'];
        bloglist.forEach(displayCards);
    });

function displayCards(card) {
    let cardview = document.querySelector('#cardview');
    let blogcard = document.createElement('div');
    blogcard.innerHTML = 
        `<div class="bs-grid">
            <a href="${card.link}"><img class="blog-tn green" src="${card.img}" alt="${card.alt}"></a>
            <a href="${card.link}"> 
                <h1 class="blog-heading">${card.title}</h1>
                <p class="blog-description">${card.caption}</p>
            </a>
            <i class="fa-regular fa-heart like"></i>
        </div>`;
    cardview.appendChild(blogcard);
};