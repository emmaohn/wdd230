// TO DO
// Three images of different sizes that are respnsive (webp)
// wind chill in the span

toggleNav = () => {
    document.getElementById('header__nav').classList.toggle('hidden');
}

document.getElementById('ham').addEventListener('click', toggleNav);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
document.getElementById('year').textContent = today.getFullYear();
document.getElementById('todays-date').textContent = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

const lastmodified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = document.lastModified;

let day = 1;
// today.getDay()
if (day == 1 || today.getDay() == 2) {
    document.getElementById('meeting-banner').style.display = 'block';
} else {
    document.getElementById('meeting-banner').style.display = 'none';
};