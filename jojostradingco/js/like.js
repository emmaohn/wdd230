
window.addEventListener('load', () => {
    const hearts = document.querySelectorAll('.fa-heart');
    let heartData = JSON.parse(localStorage.getItem('favorites')) ?? [];

    const heartClick = (heart, id) => {
        switchHeartIcon(heart);
        starData[id] = (star.classList.contains('fa-solid')) ? 1 : 0;
        localStorage.setItem('favorites', JSON.stringify(starData));
    }

    const switchHeartIcon = (heart) => {
        heart.classList.toggle('fa-regular');
        heart.classList.toggle('fa-solid');
    }

    for (let i = 0; i < hearts.length; i++) {
        const id = i;
        if (heartData[i] === 1) { switchHeartIcon(hearts[i]); }
        hearts[i].onclick = () => { heartClick(hearts[i], id); };
    }
});

// const LIKES_KEY = "temple-likes";

// function initTempleLikes(){
//     let likes_string = localStorage.getItem(LIKES_KEY);
//     if (likes_string==null){
//         likes_string="[]";
//         localStorage.setItem(LIKES_KEY, likes_string);
//     }
// }

// // This function handles when a user checks an individual checkbox
// // First, it updates the list of "liked" temples by either adding or removing it
// // depending on if the box is checked or unchecked.
// // push adds an item to a list
// // splice removes an item from a list.
// // Finally, the new list is put into local storage for later use. 
// function likeTemple(item){
//     let likes_string = localStorage.getItem(LIKES_KEY);
//     let likeslist = JSON.parse(likes_string);
//     if (item.checked){
//         if (!likeslist.includes(item.id)){
//             likeslist.push(item.id);
//         }
//     }
//     else{
//         if (likeslist.includes(item.id)){
//             likeslist.splice(likeslist.indexOf(item.id), 1);
//         }
//     }
//     localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
// }

// // This function checks an individual box for a like
// function displayLike(item){
//     let obj = document.getElementById(item);
//     obj.checked = true;
// }

// let requestURL = "./temples.json";

// // Call the init function when the page loads
// initTempleLikes();

// // Fetch the temple data and display the cards,
// // Then display the likes after the cards are built
// fetch(requestURL)
//         .then((response) => {            
//             return response.json();
//         })
//         .then((jsonObject) => {          
//           let temples = jsonObject['temples'];
//             // Upon page load, display the temples
//             temples.forEach(displayTemple);
//         })
//         .then(() => {
//             // Turn the string value from local storage into a Java array
//             let likes_string = localStorage.getItem(LIKES_KEY);
//             let likeslist = JSON.parse(likes_string);            

//             // Set the likes
//             likeslist.forEach(displayLike);
//         });