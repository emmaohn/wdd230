let lastvisited = localStorage.getItem('lastVisited') ?? new Date(),
    diff = math.floor(new Date() - new Date(lastvisited) / 1000 / 60 / 60 / 24);

// console.log(diff);
localStorage.setItem('lastVisited', new Date());

document.getElementById('lastvisit').textContent = 'You last visited this site' + diff + 'days ago';
